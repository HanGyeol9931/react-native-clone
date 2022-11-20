import React from 'react';
import styled from 'styled-components/native';

const StyledInput = styled.TextInput`
  min-width: 60%;
  height: 40px;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  border: 2px;
  border-color: #3498db;
  color: #3498db;
  font-size: 20em;
  font-weight: 600;
`;
const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;
const Image2 = styled.Image`
  width: 50px;
  height: 50px;
  margin-bottom: 15px;
`;
const Main = styled.View`
    flex: 1;
    justify-content: space-between;
`

export {StyledInput,Container,Image2,Main}