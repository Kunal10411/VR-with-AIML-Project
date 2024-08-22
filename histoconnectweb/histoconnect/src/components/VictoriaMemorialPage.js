import React from 'react';
import styled from 'styled-components';
import victoriaMemorialImage from '../images/victHisto.jpeg'; // Import the image

// Styled component for the page container
const Container = styled.div`
  background-image: url(${victoriaMemorialImage});
  background-size: cover;
  background-position: center;
  height: 100vh; /* Adjust the height as needed */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

// Styled component for the overlay
const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay for better readability */
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

// Styled component for the button
const StartButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const VictoriaMemorialPage = () => {
    return (
        <Container>
            <Overlay>
                <h1 style={{ fontFamily: 'Arial', fontSize: '36px', color: '#fff' }}>Victoria Memorial</h1>
                <p style={{ margin: '10px 0', fontSize: '18px', color: '#fff' }}>Iconic landmark of history and culture.</p>
                <p style={{ margin: '10px 0', fontSize: '18px', color: '#fff' }}>A tribute to Queen Victoria's legacy.</p>
                <a href="https://kunal10411.github.io/unity-victoriamemorial/">
                <StartButton >Start</StartButton>
                </a>
            </Overlay>
        </Container>
    );
}

export default VictoriaMemorialPage;
