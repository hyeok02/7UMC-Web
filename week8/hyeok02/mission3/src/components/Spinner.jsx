import React from 'react';
import styled from 'styled-components';

const SpinnerContainer = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #4caf50;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: spin 1s linear infinite;
  margin: 0 auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = () => {
  return <SpinnerContainer />;
};

export default Spinner;