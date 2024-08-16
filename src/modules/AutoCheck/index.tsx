import { useNavigate } from "react-router-dom";
import { Box, Container } from "./index-css";

export default function AutoCheck(){
    const navigate = useNavigate()
    return(
        <Container>
            <Box onClick={() => navigate('/AutoCheck/register')}>Registrar</Box>
            <Box onClick={() => navigate('/AutoCheck/detection')}>Checkar</Box>
        </Container>
    )
}