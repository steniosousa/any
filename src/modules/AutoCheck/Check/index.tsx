import React, { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import Api from '../../../api/service';
import { Cam, CloseCam, Container } from './index-css';
import * as faceapi from 'face-api.js';
import { SiDigitalocean } from "react-icons/si";
import { FaCameraRotate } from "react-icons/fa6";

const Check: React.FC = () => {
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [usersData, setusersData] = useState<faceapi.LabeledFaceDescriptors[]>([])
  const [camera, setCamera] = useState('front')
  const [imagesUsers, setImagesUsers] = useState<{ name: string, photo: string }[]>([])
  const [userDetect, setUSerDetect] = useState('')

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
      setUSerDetect(userLocalized)
      const confirm = await Swal.fire({
        icon: 'question',
        title: `esse é voce? ${userLocalized}`,
        showDenyButton: true,
        showCancelButton: false,
        showConfirmButton: true,
        denyButtonText: 'Não',
        confirmButtonText: 'Sim'
      })

      if (!confirm.isConfirmed) {
        setUSerDetect('')
      }

    } catch (error) {
      console.log(error)
    }
  };

  const detectAndIdentify = async () => {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();

      const rearCamera = devices.find(device =>
        device.kind === 'videoinput' && device.label.toLowerCase().includes('back')
      );
      const cameraId = rearCamera ? rearCamera.deviceId : undefined;
      const constraints = {
        video: {
          facingMode: 'environment',
          deviceId: cameraId ? { exact: cameraId } : undefined
        }
      };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;

      }
    } catch (error) {
      console.error('Error accessing webcam:', error);
    }
  };


  async function detect() {
    if (!videoRef.current) return

    const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceDescriptors();

    identifyUser(detections, usersData);
  }


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
    detect()

  }, [isModelLoaded])
  useEffect(() => {
    (async () => {
      try {
        const MODEL_URL = '/models';
        await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
        await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
        await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
        setIsModelLoaded(true);
        detectAndIdentify()
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
      <CloseCam >
        <SiDigitalocean color='green' size={24} onClick={detect} />
        <FaCameraRotate size={24} onClick={() => setCamera('back')} />
      </CloseCam>

      <Cam ref={videoRef} width="100%" height="50%" muted autoPlay    playsInline />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </Container>
  );
};

export default Check;
