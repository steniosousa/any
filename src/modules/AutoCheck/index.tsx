import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../component/header';
import { Container, Heading, SubText, ContainerBox, Box } from './index-css'; // Importe os componentes estilizados

const AutoCheck: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Heading>AutoCheck</Heading>
      <SubText>Faça o controle do acesso de seus operários</SubText>
      <ContainerBox>
        <Box onClick={() => navigate('/AutoCheck/register')}>Registrar</Box>
        <Box onClick={() => navigate('/AutoCheck/detection')}>Checkar</Box>
      </ContainerBox>
    </Container>
  );
};

export default AutoCheck;
