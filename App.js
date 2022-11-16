import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput ,Image} from 'react-native';
import styled from 'styled-components/native';
import Button from './Com/Button';
import Input from './Com/Input';
// import img from "https://e7.pngegg.com/pngimages/202/248/png-clipart-twitter-logo-computer-icons-encapsulated-postscript-tweeter-blue-logo-thumbnail.png"

const [textId,setTextId] = useState("")
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
  return (
    <Container>
      <Image2 source={{
        uri : "https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/twitter_logo_blue.png.twimg.768.png"
      }}/>
      <Input title = "아이디를 입력하세요"/>
      <Input title = "비밀번호를 입력하세요"/>
      <Button title = "Login"/>
    </Container>
  );
}


