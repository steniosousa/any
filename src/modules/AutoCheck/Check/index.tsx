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
  const [user, setUSer] = useState(null)
  const [usersData, setusersData] = useState()


  async function detected() {

    if (videoRef.current) {
      try {
        const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks()
          .withFaceDescriptors();

        if (!usersData) return
        const img = await base64ToImage(usersData)
        const detectionsBack = await faceapi.detectAllFaces(img, new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks()
          .withFaceDescriptors();
        if (detectionsBack.length > 0) {

          const [descriptor] = detectionsBack.map(d => d.descriptor);
          if (descriptor) {
            if (detections.length > 0) {
              const faceMatcher = new faceapi.FaceMatcher([descriptor], 0.6);

              const results = detections.map(d => faceMatcher.findBestMatch(d.descriptor));
              results.forEach(async (result: any, i) => {
                stopInterval()
                setUSer(result)
              });
            }
          }
        }
      } catch (error) {
        console.error('Error during face detection:', error);
      }
    }


  }

  let intervalId: any;

  const startInterval = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }

    intervalId = setInterval(() => {
      detected()

    }, 2000);
  };

  const stopInterval = () => {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  };

  const [consfirmUser, setConfirmUser] = useState(false)
  useEffect(() => {
    if (!consfirmUser) {
      startInterval()

    }
  }, [isModelLoaded])

  useEffect(() => {
    (async () => {
      if (user) {
        const confirm = await Swal.fire({
          icon: 'error',
          title: `esse é voce? ${user}`,
          showDenyButton: true,
          showCancelButton: false,
          showConfirmButton: true,
          denyButtonText: 'Cancelar',
          confirmButtonText: 'Confirmar'
        })
        if (confirm.isConfirmed) {
          stopInterval()
          setConfirmUser(true)
        } else {
          startInterval()
        }

      }
    })()

  }, [user])





  const base64ToImage = (base64String: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = (error) => reject(error);
      img.src = base64String;
    });
  };


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
        setusersData(data)
      } catch (error) {
        console.log(error)
      }
    })();

    (async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing webcam:', error);
      }
    })()
  }, [])
  return (
    <Container>
      <CloseCam>
        <IoVideocamOffOutline color='red' size={24}/>
      </CloseCam>
      <Cam ref={videoRef} width="100%" height="100%" muted autoPlay />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </Container>
  );
};

export default Check;
