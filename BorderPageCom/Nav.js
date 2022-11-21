import React from "react";
import styled from "styled-components/native";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const ViewContainer = styled.View`
  width: 100%;
  height: 40px;
  background-color: white;
  flex-direction: row;
  padding: 0 10px;
  align-items: center;
`;
const Title = styled.Text`
  width: 85%;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  font-size: 20px;
  color: black;
`;
const ViewCom = styled.TouchableOpacity``;

const NavBar = (props) => {
  return (
    <ViewContainer>
      <ViewCom activeOpacity="1" onPress={props.onPress}>
        <Feather name="arrow-left" size={24} color="black" />
      </ViewCom>
      <Title>트윗</Title>
    </ViewContainer>
  );
};

export default NavBar;
