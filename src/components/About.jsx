import React from 'react';
import styled from 'styled-components';
import { devices } from '../theme';

const AboutWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 2.4rem auto;
  display: flex;
  flex-direction: column;
  align-items: left;

  @media ${devices.mobileL} {
    padding: 0 1.2rem;
  }
`;

const Title = styled.h1`
  font-size: 3.6rem;
  color: ${(props) => props.theme.textDark};
`;

const Text = styled.p`
  font-size: 1.4rem;
  color: ${(props) => props.theme.textDark};
`;

export const About = () => {
  return (
    <AboutWrapper>
      <Title>About the project</Title>
      <Text>Text</Text>
    </AboutWrapper>
  );
};
