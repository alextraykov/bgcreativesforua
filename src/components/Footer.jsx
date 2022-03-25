import React from 'react';
import styled from 'styled-components';
import { CTA, StyledLink } from './Header';
import { devices } from '../theme';

const FooterFrame = styled.footer`
  width: 100%;
  height: 8.5rem;
  background-color: ${(props) => props.theme.textDark};
  margin-top: auto;
  padding: 2.4rem 0;

  @media ${devices.mobileL} {
    height: auto;
  } ;
`;

const FooterInner = styled.div`
  width: 100%;
  height: 100%;
  max-width: 80rem;
  display: flex;
  align-items: center;
  margin: 0 auto;

  @media ${devices.mobileL} {
    flex-direction: column;
  } ;
`;

const FooterLogo = styled.p`
  color: ${(props) => props.theme.textLight};
  font-size: 2.4rem;
  font-weight: 700;
`;

const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  @media ${devices.mobileL} {
    flex-direction: column;
    margin: 0;
    margin-top: 1rem;

    & > a {
      &:not(:last-child) {
        margin-bottom: 1rem;
      }
    }
  } ;
`;

export const Footer = () => {
  return (
    <FooterFrame>
      <FooterInner>
        <FooterLogo>bgcreativesforua</FooterLogo>
        <FooterLinks>
          <StyledLink to="/about">About the project</StyledLink>
          <StyledLink to="/contact">Contacts</StyledLink>
          <StyledLink to="/bgcreativesforua">Donate</StyledLink>
          <CTA to="https://airtable.com/shrH757xtAinFWZRH">Join the list</CTA>
        </FooterLinks>
      </FooterInner>
    </FooterFrame>
  );
};
