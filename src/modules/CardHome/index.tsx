import { useNavigate } from "react-router-dom";
import {  Card, ImgCard, Title } from "./index-css";

export default function CardHome({moduleTitle, src, to}:{moduleTitle:string, src:string, to:string}){
    const navigate = useNavigate()
    function handleLocation(){
        navigate(`/${to}`)
    }
    return(
        <Card onClick={() => handleLocation()}>
            <Title>{moduleTitle}</Title>
            <ImgCard src={src} alt={moduleTitle}/>
        </Card>
    )
}