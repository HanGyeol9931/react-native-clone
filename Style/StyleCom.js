import React from 'react';
import styled from 'styled-components/native';
// expo-constants 높이 계산
import Constants from 'expo-constants';


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
    /* justify-content: space-between; */
    background-color: white;
    /* Constants.statusBarHeight : 상단 높이 계산해줌  */
    padding-top: ${Constants.statusBarHeight+"px"};
`
const ButtonBtnContainer = styled.View`
    background-color: transparent;
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 10px;
`;
const ButtonContainer = styled.TouchableOpacity`
    position: absolute;
    bottom: 3%;
    right: 3%;
    background-color: #3498db;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    margin: 15px 0px;
    justify-content: center;
    align-items: center;
`;

export {StyledInput,Container,Image2,Main,ButtonBtnContainer,ButtonContainer}