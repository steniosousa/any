import React, { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import Api from '../../../api/service';
import { Cam, CloseCam, Container } from './index-css';
import { IoVideocamOffOutline } from "react-icons/io5";
import * as faceapi from 'face-api.js';

const Check: React.FC = () => {
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [usersData, setusersData] = useState<faceapi.LabeledFaceDescriptors[]>([])
  const [imagesUsers, setImagesUsers] = useState<{ name: string, photo: string }[]>([])

  const processPhotos = async (data: { name: string, photo: string }[]): Promise<void> => {
    const descriptors: faceapi.LabeledFaceDescriptors[] = [];
    const images: any[] = await Promise.all(
      data.map(async (item, i) => {
        const base64Image = await base64ToImage(item.photo);
        const detections = await faceapi.detectAllFaces(base64Image, new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks()
          .withFaceDescriptors();
        const userDescriptors = detections.map(d => d.descriptor);
        if (userDescriptors.length > 0) {
          descriptors.push(new faceapi.LabeledFaceDescriptors(item.name, userDescriptors));
        }
        return descriptors
      })
    );
    setusersData(images)
  };


  const identifyUser = async (detections: any[], userDescriptors: faceapi.LabeledFaceDescriptors[]) => {
    if (userDescriptors.length === 0) return;
    try {
      let userLocalized;
      for (const item of userDescriptors) {
        const faceMatcher = new faceapi.FaceMatcher(item, 0.6);
        const results = detections.map(d => faceMatcher.findBestMatch(d.descriptor));
        results.forEach(async (result: any, i) => {
          if (result.label == "unknown" || !result.label) return
          userLocalized = result.label
        });
      }

      if (!userLocalized) return
      const confirm = await Swal.fire({
        icon: 'error',
        title: `esse é voce? ${userLocalized}`,
        showDenyButton: true,
        showCancelButton: false,
        showConfirmButton: true,
        denyButtonText: 'Não',
        confirmButtonText: 'Sim'
      })

      if(!confirm.isConfirmed){
        detectAndIdentify()
      }

    } catch (error) {
      console.log(error)
    }
  };

  const detectAndIdentify = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        if (!videoRef.current) return
        const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks()
          .withFaceDescriptors();
    
        console.log(detections)
        identifyUser(detections, usersData);
      }
    } catch (error) {
      console.error('Error accessing webcam:', error);
    }
  };



  const base64ToImage = (base64String: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = (error) => reject(error);
      img.src = base64String;
    });
  };


  useEffect(() => {
    processPhotos(imagesUsers)
    detectAndIdentify()

  }, [isModelLoaded])
  useEffect(() => {
    (async () => {
      try {
        const MODEL_URL = '/models';
        await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
        await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
        await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
        setIsModelLoaded(true);
      } catch (error) {
        console.error('Error loading models:', error);
      }
    })();
    (async () => {
      try {
        const { data } = await Api.get('AutoCheck/truckDriverUser/check')
        setImagesUsers(data)
      } catch (error) {
        console.log(error)
      }
    })();
  }, [])
  return (
    <Container>
      <CloseCam>
        <IoVideocamOffOutline color='red' size={24} />
      </CloseCam>
      <Cam ref={videoRef} width="100%" height="100%" muted autoPlay />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </Container>
  );
};

export default Check;
