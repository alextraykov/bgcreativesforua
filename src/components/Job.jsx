import React from 'react';
import styled from 'styled-components';
import { devices } from '../theme';

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

const Logo = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
`;

const JobDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2rem 0 2.4rem;

  @media ${devices.mobileL} {
    margin: 1.4rem 0;
  }
`;

const JobTitle = styled.h4`
  font-size: 2rem;
  color: ${(props) => props.theme.textDark};
  margin-bottom: 1rem;
`;

const JobSite = styled.a`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.textDark};

  &:visited {
    color: ${(props) => props.theme.textDark};
  }
`;

const JobDescription = styled.p`
  font-size: 1.4rem;
  color: ${(props) => props.theme.textDark};
`;

const ContactButton = styled.a`
  padding: 0.8rem 1.6rem;
  border-radius: 3px;
  color: ${(props) => props.theme.textDark};
  text-decoration: none;
  font-size: 1.2rem;
  background-color: ${(props) => props.theme.yellow};
  height: 3rem;
  align-self: center;
  margin-left: auto;

  &:hover {
    cursor: default;
    text-decoration: underline;
  }

  &:visited {
    color: ${(props) => props.theme.textDark};
  }

  @media ${devices.mobileL} {
    flex-shrink: 0;
  }
`;

export const Job = ({title, link, description, contactLink,externalLink, buttonContent, image}) => {
  return (
    <Frame>
      {image&&<Logo src={image} />}
      <JobDetails>
        <JobTitle>{title}</JobTitle>
        <JobSite href={link}>
{link}
        </JobSite>
        <JobDescription>
          {description}
        </JobDescription>
      </JobDetails>
      <ContactButton href=
      {externalLink?externalLink:`mailto:${contactLink}`}>{buttonContent?buttonContent:`Contact`}</ContactButton>
    </Frame>
  );
};
