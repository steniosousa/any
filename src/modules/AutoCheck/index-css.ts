import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f4f4f9;
  text-align: center;
`;

export const Heading = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 10px;
`;

export const SubText = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 30px;
`;

export const ContainerBox = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #0056b3;
    transform: translateY(-4px);
  }

  &:active {
    background-color: #004494;
    transform: translateY(0);
  }
`;
