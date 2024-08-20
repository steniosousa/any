import React, { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import Api from '../../../api/service';
import { Container } from '../index-css';
import { Cam, CloseCam } from './index-css';
import { IoVideocamOffOutline } from "react-icons/io5";

const Check: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isRequesting, setIsRequesting] = useState<boolean>(false);
  const [stream, setStream] = useState<MediaStream | null>(null)

  useEffect(() => {
    const startVideo = async () => {
      try {
        if (videoRef.current) {
          const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
          videoRef.current.srcObject = stream;
          setStream(stream)
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
          if (!stream) return
          try {
            if (base64Image) {
              const formData = new FormData();
              formData.append('photo', base64Image);

              const { data } = await Api.post('/AutoCheck/truckDriverUser/check', formData);
              const confirm = await Swal.fire({
                icon: 'info',
                title: `Você é ${data.identifyUser}?`,
                showDenyButton: true,
                showCancelButton: true,
                showConfirmButton: true,
                denyButtonText: 'Não',
                confirmButtonText: 'Sim'
              })
              if (!confirm.isConfirmed) {
                offCam()
              }
            }
          } catch ({ data }) {
            await Swal.fire({
              icon: 'info',
              title: `${data}?`,
              showDenyButton: false,
              showCancelButton: false,
              showConfirmButton: true,
              denyButtonText: 'Não',
              confirmButtonText: 'Sim'
            })
          } finally {
            setIsRequesting(false);
          }
        }
      }

    })()
  }, [isRequesting == true])


  async function offCam() {
    if (videoRef.current) {
      const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
      videoRef.current.srcObject = stream;
      if (stream) {
        stream.getTracks().forEach((track) => {
          track.stop()
        })

      }
    }
  }
  return (
    <Container>
      <CloseCam onClick={() => offCam()}>
        <IoVideocamOffOutline size={30} color="red" />
      </CloseCam>
      <Cam ref={videoRef} muted autoPlay />
    </Container>
  );
};

export default Check;
