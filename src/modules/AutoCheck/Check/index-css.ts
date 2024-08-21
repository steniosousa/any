import { styled } from "styled-components";


export const Container = styled.div`
    margin: 0;
    padding: 0;
`
export const Cam = styled.video`
    margin: 0;
    padding: 0;
    display: block; 
    height: 100vh;
    width: 100%;
`

export const ButtonCam = styled.button`
    position:absolute;
    bottom: 40px;
    cursor: pointer;
`

export const CloseCam = styled.button`
    width: 100%;
    justify-content:space-around;
    position: absolute;
    display: flex;
    gap:50;
    align-items:center;
    bottom:30px;
    padding: 10px;
    z-index:99
`