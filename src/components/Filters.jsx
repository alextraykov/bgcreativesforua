import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.textLight};
`;

const InnerContainer = styled.div`
  display: flex;
  padding: 3rem 0;
  width: 100%;
  max-width: 800px;
`;

const TextInput = styled.input`
  border: 1px solid ${(props) => props.theme.borderLight};
  border-radius: 5px;
  color: ${(props) => props.theme.textInput};
  padding: 1rem 1.35rem;
  margin-right: 1.75rem;
  width: 100%;
  max-width: 30rem;
`;

export const Filters = () => {
  return (
    <Background>
      <InnerContainer>
        <TextInput type="text" placeholder="Потърси обява" />
      </InnerContainer>
    </Background>
  );
};
