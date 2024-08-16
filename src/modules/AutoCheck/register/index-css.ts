import { styled } from "styled-components";

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-size: cover;
`;

export const RegisterBox = styled.div`
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 360px;
  padding: 20px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

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

export const HelperText = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #888;
`;

export const PhotoCaptured = styled.img`
  width: 100%;
`

export const Cam = styled.video`
width: 100%;
`

export const ButtonCam = styled.button``