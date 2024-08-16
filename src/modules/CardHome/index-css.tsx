import { styled } from "styled-components";

export const Card = styled.div`
    cursor: pointer;
    display:flex;
    flex-direction:column;
    border-radius:20%;
    align-items:center;
    text-align:center;
    background: orange; 
    justify-content:center;
    max-width:200px;
    height:200px;

`

export const ImgCard = styled.img`
    border-radius:'10%';
    max-width:200px;
    height:200px;
`

export const Title = styled.p`
    align-self:center;
    background: orange; 
    padding:10px;
    border-radius:20%;
    color:white
`