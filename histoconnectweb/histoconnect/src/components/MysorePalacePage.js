import React from 'react';
import styled from 'styled-components';
import MysoreHisto from '../images/MysoreHisto.jpg'; // Import the image

// Styled component for the page container
const Container = styled.div`
  background-image: url(${MysoreHisto});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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

const Title = styled.h1`
  font-family: Arial;
  font-size: 36px;
  color: #fff;
  margin: 10px 0;
`;

const MysorePalacePage = () => {
    return (
        <Container>
            <Overlay>
                <Title>Mysore Palace</Title>
                <p style={{ margin: '10px 0', fontSize: '18px', color: '#fff' }}>
                    Historical palace located in Mysore, Karnataka, India.
                </p>
                <p style={{ margin: '10px 0', fontSize: '18px', color: '#fff' }}>
                    Built in 1912, it is one of the most famous tourist attractions in India.
                </p>
                <a href="https://kunal10411.github.io/unity-mysorepalace/">
                <StartButton >Start</StartButton>
                </a>
            </Overlay>
        </Container>
    );
}

export default MysorePalacePage;
