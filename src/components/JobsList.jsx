import React from 'react';
import styled from 'styled-components';
import { Job } from './Job';
import { devices } from '../theme';
import alex from '../static/alex.jpeg'
import nextdc  from '../static/nextdc.png'
import fourPlus  from '../static/fourplus.png'
import gutsBrain  from '../static/guts-and-brains.png'
import theSmarts from '../static/thesmarts.png'
import nobleGraphics from '../static/noblegraphics.png'

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 80rem;
  margin: 4rem auto;

  @media ${devices.mobileL} {
    padding: 0 1.2rem;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Text = styled.h3`
  font-size: 3.2rem;
  font-weight: 500;
  color: ${(props) => props.theme.text};
  margin-bottom: 2.4rem;
`;

export const JobsList = () => {
  return (
    <>
      <ListWrapper>
        <Text>Companies</Text>
        <List>
          <Job 
          title="Four Plus" link="https://noblegraphics.eu/" description="We help clients find their voice, launch campaigns and products, and explain them to their customers. Get in touch, see who we are or check our selected projects. "
          contactLink="jobs@noblegraphics.eu"
          image={fourPlus} />
          <Job 
          title="NEXT-DC" link="https://www.next-dc.com" description="If you feel like you’re the right kind of person for our agency, send us an email with your CV and portfolio. We’re on a constant lookout for talented designers, copywriters, developers, account executives, and interns."
          contactLink="careers@next-dc.com"
          image={nextdc}
          />
          <Job 
          title="Noble Graphics" link="https://noblegraphics.eu " description="By breeding a culture of respect, curiosity and critical thinking.And we get the job done.After all, nobility obliges."
          contactLink="jobs@fourplus.bg"
          image={nobleGraphics} />
          <Job
               title="guts & brains DDB" link="https://gutsandbrainsddb.bg/" description="Hello you. Yeah you. We are gutsandbrainsDDB and we are an agency. Like a spy organisation. But cooler."
               contactLink="hello@gutsandbrainsddb.com"
               image={gutsBrain}
           />
          <Job
               title="The Smarts" link="https://www.thesmarts.eu/" description="We are a full service advertising agency. We provide insightful strategic planning and comprehensive client service, relentless creative work and effective digital communication, flawless BTL and film- production services."
               externalLink=""
               image={theSmarts}
           />
        </List>
      </ListWrapper>
    </>
  );
};
