import { useEffect, useRef, useState } from "react";
import { Button, ButtonCam, Cam,  Input, Label, PhotoCaptured, RegisterBox, RegisterContainer, Title } from "./index-css";

export default function Register() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [photo, setPhoto] = useState<string | null>(null);

    const [name, setName] = useState('')
    const [plate, setPlate] = useState('')

    const startCamera = async () => {
        try {
            const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = mediaStream;
            }
        } catch (error) {
            console.error('Error accessing camera:', error);
        }
    };


    const capturePhoto = (e: any) => {
        e.preventDefault()
        if (canvasRef.current && videoRef.current) {
            const context = canvasRef.current.getContext('2d');
            if (context) {
                canvasRef.current.width = videoRef.current.videoWidth;
                canvasRef.current.height = videoRef.current.videoHeight;
                context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
                setPhoto(canvasRef.current.toDataURL('image/png'));
            }
        }
    };


    async function handleRegister(e:any){
        e.preventDefault()
        console.log(photo)
    }


    useEffect(() => {
        startCamera();

    }, []);

    
    return (
        <RegisterContainer>
            <RegisterBox>
                <Title>Register</Title>
                <form>
                    <Label htmlFor="name">Nome:</Label>
                    <Input onChange={(e:any) => setName(e.target.value)} type="text" id="name" placeholder="Digite o nome do motorista" />

                    <Label htmlFor="plate">Placa</Label>
                    <Input onChange={(e:any) => setPlate(e.target.value)} type="text" id="plate" placeholder="Digite a placa do motorista" />

                    {photo ? (
                        <div>
                            <h2>Foto Capturada</h2>
                            <PhotoCaptured src={photo} alt="Captured" />
                        </div>

                    ) : (   
                        <>
                            <Cam ref={videoRef} autoPlay width="640" height="480" />
                            <ButtonCam onClick={(e:any) => capturePhoto(e)}>Capturar Foto</ButtonCam>
                            <canvas ref={canvasRef} style={{ display: 'none' }} />
                        </>
                    )}
                    <Button onClick={(e:any) => handleRegister(e)}>Registrar</Button>
                </form>
            </RegisterBox>
        </RegisterContainer>
    )
}