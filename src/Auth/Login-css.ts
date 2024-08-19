import { styled } from"styled-components";
import backgroundImage from'../Assets/Wallpaper/wallpaper.jpg'; 

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(${'https://images.pexels.com/photos/1662298/pexels-photo-1662298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}) no-repeat center center fixed;
  background-size: cover;
  padding: 20px; /* Added padding for better responsiveness */
  overflow: hidden;
  margin: 0; /* Remove any default margin */
  padding: 0; /* Remove padding to eliminate extra space */
`;

export const LoginBox = styled.div`
  background: #ffffff;
  border-radius: 15px; /* Slightly more rounded corners */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* Softer shadow */
  max-width: 400px; /* Increased max width for larger screens */
  width: 100%;
  padding: 30px; /* Added more padding for a better look */
  text-align: center;
  box-sizing: border-box; /* Ensures padding is included in the width */
`;

export const Title = styled.h1`
  font-size: 28px; /* Larger title for better emphasis */
  color: #333;
  margin-bottom: 20px;
  font-weight: 600; /* Slightly bolder title */
`;

export const Label = styled.label`
  display: block;
  text-align: left;
  font-size: 16px; /* Larger font size for better readability */
  color: #555;
  margin-bottom: 8px;
  font-weight: 500; /* Bold labels */
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px; /* Increased padding for a better input feel */
  border: 1px solid #ddd;
  border-radius: 8px; /* More rounded corners */
  margin-bottom: 20px; /* Increased spacing between inputs */
  font-size: 16px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
  
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px; /* Increased padding for better button appearance */
  border: none;
  border-radius: 8px; /* More rounded corners */
  background-color: #007bff;
  color: white;
  font-size: 18px; /* Larger font size for the button */
  font-weight: 600; /* Bolder button text */
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.02); /* Slightly enlarge on hover for a better effect */
  }

  &:active {
    transform: scale(0.98); /* Slightly shrink on click for a button press effect */
  }
`;

export const HelperText = styled.p`
  margin-top: 15px; /* Increased margin for better spacing */
  font-size: 14px;
  color: #888;
  font-weight: 400; /* Slightly lighter text */
  cursor:pointer;
`;

const mediaQuery = '@media (max-width: 768px)';

export const ResponsiveLoginBox = styled(LoginBox)`
  max-width: 90%; /* Allows more flexibility on smaller screens */
  padding: 20px; /* Reduces padding for smaller screens */
`;

export const ResponsiveTitle = styled(Title)`
  font-size: 24px; /* Adjust title size for smaller screens */
`;

export const ResponsiveLabel = styled(Label)`
  font-size: 14px; /* Adjust label size for smaller screens */
`;

export const ResponsiveInput = styled(Input)`
  font-size: 14px; /* Adjust input font size for smaller screens */
`;

export const ResponsiveButton = styled(Button)`
  font-size: 16px; /* Adjust button font size for smaller screens */
`;
