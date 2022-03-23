import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { devices } from '../theme';
import highFive from '../static/high-five.png';

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.background};
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-top: 2.75rem;

  @media ${devices.mobileL} {
    flex-direction: column;
  }
`;

export const StyledLink = styled(Link)`
  font-size: ${(props) => (props.logo ? '2.4rem' : '1.4rem')};
  color: ${(props) => props.theme.textLight};
  text-decoration: none;

  &:not(:last-child) {
    margin-left: 1.5rem;
  }

  @media ${devices.mobileL} {
    &:not(:last-child) {
      margin-left: 0;
      margin-bottom: 1rem;
    }
  }
`;

export const CTA = styled.a`
  font-size: 1.4rem;
  color: ${(props) => props.theme.textLight};
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  padding: 0.8rem 1.6rem;
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.textDark};
  margin-left: 2rem;

  @media ${devices.mobileL} {
    margin-left: 0;
  }
`;

const NavigationLinks = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  @media ${devices.mobileL} {
    flex-direction: column;
    margin: 0;
    margin-bottom: 1rem;
  }
`;

const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 27.5rem;
  margin: 3rem 0 6rem 0;

  @media ${devices.mobileL} {
    flex-direction: column;
  }
`;

const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  flex-shrink: 0;

  @media ${devices.mobileL} {
    width: 100%;
    padding: 0 1.2rem;
  }
`;

const HeroRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${devices.mobileL} {
    display: none;
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textLight};
  background-color: ${(props) => props.highlighted && props.theme.mint};
  font-size: 3.25rem;
`;

const HeroImage = styled.img`
  width: 100%;
`;

export const Header = () => {
  return (
    <Background>
      <InnerContainer>
        <Navigation>
          <StyledLink logo="true" to="/">
            🇧🇬🕊️🇺🇦
          </StyledLink>
          <NavigationLinks>
            <StyledLink to="/">Companies</StyledLink>
            <StyledLink to="/about">About the project</StyledLink>
            <StyledLink to="/">Helpful Resources</StyledLink>
            <StyledLink to="contact">Contacts</StyledLink>
          </NavigationLinks>
          <CTA target="_blank" href="https://airtable.com/shrH757xtAinFWZRH">Join the list</CTA>
        </Navigation>
        <Hero>
          <HeroLeft>
            <Title>
              A list of Bulgarian companies providing support and jobs for
              Ukranian creatives
            </Title>
          </HeroLeft>
          <HeroRight>
            <HeroImage src={highFive} />
          </HeroRight>
        </Hero>
      </InnerContainer>
    </Background>
  );
};
