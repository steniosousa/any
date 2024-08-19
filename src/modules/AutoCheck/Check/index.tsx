import React, { useEffect, useRef, useState } from 'react';
import Api from '../../../api/service';
import { Container } from '../index-css';
import { Cam } from './index-css';

const Check: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isRequesting, setIsRequesting] = useState<boolean>(false);

  useEffect(() => {
    const startVideo = async () => {
      try {
        if (videoRef.current) {
          const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing webcam:', error);
      }
    };

    startVideo();
  }, [videoRef]);

  useEffect(() => {
    (async function getPicture() {
      if (videoRef.current && !isRequesting) {
        setIsRequesting(true);

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        if (context) {
          canvas.width = videoRef.current.videoWidth;
          canvas.height = videoRef.current.videoHeight;

          context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
          const base64Image = canvas.toDataURL('image/png');
          try {
            if (base64Image) {
              const formData = new FormData();
              formData.append('photo', base64Image);

              const user = await Api.post('/AutoCheck/truckDriverUser/check', formData);
            }
          } catch (error) {
            console.error('Error sending image:', error);
          } finally {
            setIsRequesting(false);
          }
        }
      }

    })()
  }, [isRequesting == true])

  return (
    <Container>
      <Cam ref={videoRef} muted autoPlay />
    </Container>
  );
};

export default Check;
