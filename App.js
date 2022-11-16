// import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput ,Image} from 'react-native';
import React,{useState,useEffect} from 'react';
import styled from 'styled-components/native';
import Button from './Com/Button';
import Input from './Com/Input';
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


// const [textId,setTextId] = useState("")
// const [pw,setPw] = useState("")
const Container = styled.View`
    flex: 1;
    background-color: white;
    align-items: center;
    justify-content: center;
`;
const Image2 = styled.Image`
    width: 50px;
    height: 50px;
    margin-bottom : 15px;
`


export default function App() {
  const [id,setTextId] = useState("")
  const [pw,setTextPw] = useState("")
  const onChangeId = (payload) => {
    console.log("아이디 실행",payload);
    setTextId(payload);
  }
  const onChangePw = (payload) => {
    console.log("비번 실행",payload);
    setTextPw(payload);
  }
  return (
    <Container>
      <Image2 source={{
        uri : "https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/twitter_logo_blue.png.twimg.768.png"
      }}/>
      <StyledInput value={id} onChangeText={onChangeId} placeholder = "아이디를 입력하세요" placeholderTextColor='#3498db'/>
      <StyledInput value={pw} onChangeText={onChangePw} placeholder = "비밀번호를 입력하세요" placeholderTextColor='#3498db'/>
      <Button title = "Login"/>
    </Container>
  );
}


