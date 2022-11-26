import React from "react";
import styled from "styled-components/native";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const FooterContainer = styled.View`
  height: 80px;
  border-top-width: 0.25px gray;
`;

const FooterContents = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-around;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContents>
        <Entypo name="home" size={24} color="black" />
        <Feather name="search" size={24} color="black" />
        <Feather name="bell" size={24} color="black" />
        <MaterialCommunityIcons name="email-outline" size={24} color="black" />
      </FooterContents>
    </FooterContainer>
  );
};

export default Footer;
