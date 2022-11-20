// import React, {useState} from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Image, Alert ,ScrollView} from "react-native";
import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import Button from "./Com/Button";
import {StyledInput,Container,Image2,Main} from "./Style/StyleCom"

export default function App() {
  const [id, setTextId] = useState("");
  const [pw, setTextPw] = useState("");
  const [islogin, setIslogin] = useState(true);
  const onChangeId = (payload) => {
    setTextId(payload);
  };
  const onChangePw = (payload) => {
    setTextPw(payload);
  };
  const login = () => {
    console.log("실행");
    if (id !== "" && pw !== "") {
      setIslogin(false);
    } else {
      Alert.alert("경고", "아이디와 비밀번호를 입력하세요.");
    }
  };
  return (
    <>
      <StatusBar style="auto" />
      {islogin ? (
        <Container>
          <Image2
            source={{
              uri: "https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/twitter_logo_blue.png.twimg.768.png",
            }}
          />
          <StyledInput
            returnKeyType="send"
            value={id}
            onChangeText={onChangeId}
            placeholder="아이디를 입력하세요"
            placeholderTextColor="#3498db"
          />
          <StyledInput
            secureTextEntry={true}
            returnKeyType="send"
            value={pw}
            onChangeText={onChangePw}
            placeholder="비밀번호를 입력하세요"
            placeholderTextColor="#3498db"
          />
          {/* secureTextEntry 비밀번호 가리게 하는거 */}
          <Button title="Login" onPress={login} />
        </Container>
      ) : (
        <Main>
          <View>
            <Text>하이1</Text>
          </View>
          <ScrollView>
            <Text>하2</Text>
            <Text>하이1</Text>
            <Text>하이1</Text>
            <Text>하이1</Text>
            <Text>하이1</Text>
            <Text>하이1</Text>
            <Text>하이1</Text>
            <Text>하이1</Text>
            <Text>하이1</Text>
            <Text>하이1</Text>
            <Text>하이1</Text>
            <Text>하이1</Text>
            <Text>하이1</Text>
            <Text>하이1</Text>
            <Text>하이1</Text>
            <Text>하이1</Text>
            <Text>하이1</Text>
            <Text>하이1</Text>
            <Text>하이1</Text>
            <Text>하이1</Text>
            <Text>하이1</Text>
            <Text>하이1</Text>
          </ScrollView>
          <View>
            <Text>하이1</Text>
          </View>
        </Main>
      )}
    </>
  );
}
