import { styled } from "styled-components";


export const Container = styled.div`
    margin: 0;
    padding: 0;
`
export const Cam = styled.video`
    margin: 0;
    padding: 0;
    object-fit: cover; 
    height: 100vh;
    width: 100%;
`

export const ButtonCam = styled.button`
    position:absolute;
    bottom: 40px;
    cursor: pointer;
`

export const CloseCam = styled.button`
    position: absolute;
    top:30px;
    right:40px;
    background: white;
    padding: 10px;
    border-radius:20%;
    cursor: pointer;
    z-index:99
`