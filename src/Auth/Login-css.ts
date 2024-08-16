import { styled } from "styled-components";
import backgroundImage from '../Assets/Wallpaper/wallpaper.jpg'; 

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(${backgroundImage}) no-repeat center center fixed;
  background-size: cover;
`;

// Caixa de login
export const LoginBox = styled.div`
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 360px;
  padding: 20px;
  text-align: center;
`;

// Título
export const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

// Labels e Inputs
export const Label = styled.label`
  display: block;
  text-align: left;
  font-size: 14px;
  color: #555;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 15px;
  font-size: 16px;
  box-sizing: border-box;
  
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

// Botão de login
export const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

// Texto de ajuda
export const HelperText = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #888;
`;