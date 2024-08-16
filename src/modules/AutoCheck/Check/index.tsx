import React, { useEffect, useRef, useState } from 'react';
import * as faceapi from 'face-api.js';

const Check: React.FC = () => {
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [photoDescriptor, setPhotoDescriptor] = useState<any>(null);

  useEffect(() => {
    const loadModels = async () => {
      try {
        const MODEL_URL = '/models';
        await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
        await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
        await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
        setIsModelLoaded(true);
      } catch (error) {
        console.error('Error loading models:', error);
      }
    };

    loadModels();
  }, []);

  useEffect(() => {
    if (isModelLoaded && videoRef.current) {
      const startVideo = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.play();

            videoRef.current.addEventListener('play', () => {
              setInterval(async () => {
                if (videoRef.current) {
                  try {
                    const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
                      .withFaceLandmarks()
                      .withFaceDescriptors();

                    if (photoDescriptor && detections.length > 0) {
                      const faceMatcher = new faceapi.FaceMatcher([photoDescriptor], 0.6);
                      const results = detections.map(d => faceMatcher.findBestMatch(d.descriptor));

                      results.forEach((result, i) => {
                        console.log(`Face ${i}: ${result.label} (${result.distance})`);
                        if (result.label === 'unknown' && result.distance < 0.6) {
                          alert('Photo matches with a face in the video!');
                        }
                      });
                    }
                  } catch (error) {
                    console.error('Error during face detection:', error);
                  }
                }
              }, 1000);
            });
          }
        } catch (error) {
          console.error('Error accessing webcam:', error);
        }
      };

      startVideo();
    }
  }, [isModelLoaded, photoDescriptor]);

  const validatePhoto = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const image = await faceapi.bufferToImage(file);

        const detections = await faceapi.detectAllFaces(image,new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks()
          .withFaceDescriptors();

        if (detections.length > 0) {
          const [descriptor] = detections.map(d => d.descriptor);
          if (descriptor) {
            setPhotoDescriptor(descriptor);
          }
        }
      } catch (error) {
        console.error('Error processing photo:', error);
      }
    }
  };

  return (
    <div>
      <video ref={videoRef} width="100%" height="100%" muted autoPlay />
      <input type="file" onChange={validatePhoto} />
    </div>
  );
};

export default Check;
