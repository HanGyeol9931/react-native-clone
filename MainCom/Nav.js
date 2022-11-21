import React from "react";
import styled from "styled-components/native";
import { Entypo } from "@expo/vector-icons";

const ViewContainer = styled.View`
  height: 40px;
  background-color: red;
  background-color: white;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const NavBar = () => {
  // console.log(props);
  return (
    <ViewContainer>
      <Entypo name="twitter" size={24} color="#3498db" />
    </ViewContainer>
  );
};

export default NavBar;
