import React from 'react';
import styled from 'styled-components';
import { devices } from '../theme';
import linkedin from '../static/linkedin.png';
import email from '../static/email.png';
import alex from '../static/alex.jpeg';
import pepo from '../static/pepo.png';

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 2.4rem 0;

  @media ${devices.mobileL} {
    padding: 0 1.2rem;
  }
`;

const Frame = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  border: 2px solid ${(props) => props.theme.borderLight};
  border-radius: 16px;
  padding: 2rem;

  &:not(:last-child) {
    margin-bottom: 1.6rem;
  }

  @media ${devices.mobileL} {
    flex-wrap: wrap;
  }
`;

const Picture = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2rem 0 2.4rem;

  @media ${devices.mobileL} {
    margin: 1.4rem 0;
  }
`;

const Name = styled.p`
  font-size: 2rem;
  color: ${(props) => props.theme.textDark};
  margin-bottom: 1rem;
`;

const Bio = styled.p`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.textDark};
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;

  & > a {
    &:first-child {
      margin-right: 0.8rem;
    }
  }
`;

const Logo = styled.img`
  width: 2.4rem;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

export const Contact = () => {
  return (
    <ContactList>
      <Frame>
        <Picture src={alex} />
        <Details>
          <Name>Alexander Traykov</Name>
          <Bio>
            I'm a Product Designer and I wanted to contribute with something beyond financial donations and support - so I decided to design this index with the hopes that it could serve as a landmark for the Ukraninan creatives willing to stay in Bulgaria.
          </Bio>
          <SocialLinks>
            <a
              href="https://www.linkedin.com/in/alextraykov/"
              aria-label="Linkedin"
            >
              <Logo src={linkedin} />
            </a>
            <a href="mailto:alextraykov@gmail.com" aria-label="email">
              <Logo src={email} />
            </a>
          </SocialLinks>
        </Details>
      </Frame>
      <Frame>
        <Picture src={pepo} />
        <Details>
          <Name>Petar Dyakov</Name>
          <Bio>
          I'm a Front-end Developer and I decided to use my skills and knowledge to help people. I got together with my friend Alex and decided to help him create this small website to try and help Ukrainian creatives.
          </Bio>
          <SocialLinks>
            <a
              href="https://www.linkedin.com/in/petar-dyakov/"
              aria-label="Linkedin"
            >
              <Logo src={linkedin} />
            </a>
            <a href="mailto:petar.dyakov@icloud.com" aria-label="Linkedin">
              <Logo src={email} />
            </a>
          </SocialLinks>
        </Details>
      </Frame>
    </ContactList>
  );
};
