import React from 'react';
import styled from 'styled-components';
import { devices } from '../theme';
import linkedin from '../static/linkedin.png';
import email from '../static/email.png';
import alex from '../static/alex.jpeg';
import pepo from '../static/pepo.png';
import {Job} from '../components/Job'
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

export const Resources = () => {
  return (
    <ContactList>
          <Job
               title="Bulgaria for Ukraine" link="https://ukraine.gov.bg/" description="This platform is built and supported by thousands of volunteers, working with the Bulgarian government to provide evacuation, transport, accommodation, medical and humanitarian help, legal assistance and a roadmap to settling down in Bulgaria, including available employment and education."
               contactLink="https://ukraine.gov.bg/evacuation/"
               image={null}
               buttonContent="Evacuate"
           />
          <Job
               title="
               In Support of People Affected by the Conflict in Ukraine" link="https://en.redcross.bg/" description="The Bulgarian Red Cross launches a National Charity Campaign in support of people affected by the conflict in Ukraine.
               The collected funds will be managed by a Public Council and will be used to meet the ever-increasing needs for humanitarian assistance."
               contactLink="https://en.redcross.bg/donations/view?donid=21"
               image={null}
               buttonContent="Donate"
           />
          <Job
               title="Updated important information on refugees from Ukraine" link="https://www.bghelsinki.org/en" description="Important information for refugees from Ukraine entering Bulgaria."
               contactLink="https://www.bghelsinki.org/en/news/aktualna-informacija-za-vlizashtite-v-bylgarija-ukrainski-grajdani"
               image={null}
               buttonContent="View"
           />
    </ContactList>
  );
};
