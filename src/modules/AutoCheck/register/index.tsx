import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import Api from "../../../api/service";
import { Button, ButtonCam, Cam, ContainerPhoto, Input, Label, PhotoCaptured, RegisterBox, RegisterContainer, Title } from "./index-css";
import { FaCamera } from "react-icons/fa";
import * as faceapi from 'face-api.js';

export default function Register() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [photo, setPhoto] = useState<any | null>(null);
    const [blobImage, setBlobImage] = useState<any>(null)
    const [name, setName] = useState('')
    const [plate, setPlate] = useState('')

    const [loadedModels, setLoadedModels] = useState(false)

    useEffect(() => {
        const loadModels = async () => {
            try {
                const MODEL_URL = '/models';
                await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
                await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
                await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
                setLoadedModels(true);
            } catch (error) {
                console.error('Error loading models:', error);
            }
        };

        loadModels();
    }, []);



    async function handleRegister(e: any) {
        e.preventDefault()
        if (!loadedModels) return

        if (!blobImage) return
        const formData = new FormData();
        formData.append('name', name);
        formData.append('plate', plate);
        formData.append('photo', photo);
        try {
            const image = await faceapi.bufferToImage(blobImage);

            const detections = await faceapi.detectAllFaces(image, new faceapi.TinyFaceDetectorOptions())
                .withFaceLandmarks()
                .withFaceDescriptors();

            if (detections.length > 0) {
                const [descriptor] = detections.map(d => d.descriptor);
                if (descriptor) {
                  const descriptorString = JSON.stringify(Array.from(descriptor));
                  formData.append('descriptor', descriptorString);
                }
            }
        } catch (error) {
            console.error('Error processing photo:', error);
        }

        

        try {
            if (!name || !plate || !photo) {
                await Swal.fire({
                    icon: 'info',
                    title: "Preencha todos os campos",
                    showDenyButton: false,
                    showCancelButton: false,
                    showConfirmButton: true,
                    denyButtonText: 'Cancelar',
                    confirmButtonText: 'Confirmar'
                })
                return
            }
            await Api.post('AutoCheck/truckDriverUser/create', formData)
            await Swal.fire({
                icon: 'success',
                title: "Motorista cadastrado com sucesso",
                showDenyButton: false,
                showCancelButton: false,
                showConfirmButton: true,
                denyButtonText: 'Cancelar',
                confirmButtonText: 'Confirmar'
            })
        } catch (error: any) {
            await Swal.fire({
                icon: 'error',
                title: error.response.data.error,
                showDenyButton: false,
                showCancelButton: false,
                showConfirmButton: true,
                denyButtonText: 'Cancelar',
                confirmButtonText: 'Confirmar'
            })

        }
    }

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


    const capturePhoto = async (event: any) => {
        event.preventDefault()

        if (event.target.files) {
            const file = event.target.files[0]
            const reader = new FileReader();
            reader.onloadend = function () {
                const base64Image = reader.result;
                setPhoto(base64Image)
            };
            reader.readAsDataURL(file);
            setBlobImage(file)
        }
        else if (canvasRef.current && videoRef.current) {
            const video = videoRef.current;
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            if (context) {
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                canvas.toBlob((blob) => {
                    if (blob) {
                        setBlobImage(blob)
                    }
                }, 'image/jpeg');
                setPhoto(canvasRef.current.toDataURL('image/png'));
            }
        }
        else {
            await Swal.fire({
                icon: 'error',
                title: "Erro ao capturar foto",
                showDenyButton: false,
                showCancelButton: false,
                showConfirmButton: true,
                denyButtonText: 'Cancelar',
                confirmButtonText: 'Confirmar'
            })
        }
    };
    useEffect(() => {
        startCamera();
    }, []);


    return (
        <RegisterContainer>
            <RegisterBox>
                <Title>Register</Title>
                <form>
                    <Label htmlFor="name">Nome:</Label>
                    <Input onChange={(e: any) => setName(e.target.value)} type="text" id="name" placeholder="Digite o nome do motorista" />

                    <Label htmlFor="plate">Placa</Label>
                    <Input onChange={(e: any) => setPlate(e.target.value)} type="text" id="plate" placeholder="Digite a placa do motorista" />
                    <Input onChange={(e: any) => capturePhoto(e)} type="file" />
                    {photo ? (
                        <div>
                            <h2>Foto Capturada</h2>
                            <PhotoCaptured src={photo} alt="Captured" />
                        </div>

                    ) : (
                        <ContainerPhoto>
                            <Cam ref={videoRef} autoPlay />
                            <ButtonCam onClick={(e: any) => capturePhoto(e)}><FaCamera size={30} />
                            </ButtonCam>
                            <canvas ref={canvasRef} style={{ display: 'none' }} />
                        </ContainerPhoto>
                    )}
                    <Button onClick={(e: any) => handleRegister(e)}>Registrar</Button>
                </form>
            </RegisterBox>
        </RegisterContainer>
    )
}