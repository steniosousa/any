import { styled } from "styled-components";

export const Card = styled.div`
    cursor: pointer;
    display:flex;
    flex-direction:column;
    border-radius:5%;
    align-items:center;
    text-align:center;
    justify-content:center;
    max-width:200px;
    height:200px;

`

export const ImgCard = styled.img`
    height:200px;
    border-radius:5%;
`

export const Title = styled.p`
    align-self:center;
    padding:10px;
    border-radius:20%;
    color:white
`