import React from 'react';
import styled from 'styled-components';
import { Job } from './Job';
import { devices } from '../theme';
import alex from '../static/alex.jpeg'
import nextdc  from '../static/nextdc.png'
import fourPlus  from '../static/fourplus.png'


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
          <Job title="Four Plus" link="https://fourplus.bg/" description="We help clients find their voice, launch campaigns and products, and explain them to their customers. Get in touch, see who we are or check our selected projects. "
          contactLink=""
          image={fourPlus} />
          <Job 
          title="NEXT-DC" link="https://www.next-dc.com" description="If you feel like you’re the right kind of person for our agency, send us an email with your CV and portfolio. We’re on a constant lookout for talented designers, copywriters, developers, account executives, and interns."
          contactLink=""
          image={nextdc}
          />
          <Job />
        </List>
      </ListWrapper>
    </>
  );
};
