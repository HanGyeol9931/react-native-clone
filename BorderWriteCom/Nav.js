import React from "react";
import styled from "styled-components/native";
import Text from "react-native";

const ViewContainer = styled.View`
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px;
  align-items: center;
`;
const WriteBtn = styled.Button`
  background-color: red;
  width: 60px;
  border-radius: 15px;
  padding: 15px 20px;
  margin: 15px 0px;
  justify-content: center;
  color: black;
`;
const Title = styled.Text`
  justify-content: center;
  align-items: center;
  font-weight: 600;
  z-index: 10;
  color: black;
`;
const BtnTitle = styled.Text`
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: black;
`;

const NavBar = (props) => {
  return (
    <ViewContainer>
      <Title onPress={props.onPress}>취소</Title>
      <WriteBtn
        title="트윗"
        disabled={props.disabled}
        onPress={props.addContents}
      />
    </ViewContainer>
  );
};

export default NavBar;
