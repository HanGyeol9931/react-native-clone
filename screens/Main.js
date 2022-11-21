import React, { useState, useEffect } from "react";
import LoginButton from "../MainCom/Button";
import NavBar from "../MainCom/Nav";
import BorderContents from "../MainCom/BorderCom";
import Footer from "../MainCom/Footer";
import {
  StyledInput,
  Container,
  Image2,
  Main,
  ButtonBtnContainer,
  ButtonContainer,
} from "../Style/StyleCom";
import { Alert, ScrollView } from "react-native";
import { Entypo } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
function Start({ navigation, route }) {
  const [id, setTextId] = useState("");
  const [pw, setTextPw] = useState("");
  const [islogin, setIslogin] = useState(true);
  const [contents, setContents] = useState({});
  useEffect(() => {
    loadContents();
  }, [route]);
  const onChangeId = (payload) => {
    setTextId(payload);
  };
  const onChangePw = (payload) => {
    setTextPw(payload);
  };
  const WritePage = () => {
    navigation.navigate("게시판");
  };
  const BorderPage = (text, key) => {
    navigation.navigate("게시판보기", { text: text, key: key });
  };
  const login = () => {
    if (id !== "" && pw !== "") {
      setIslogin(false);
    } else {
      Alert.alert("경고", "아이디와 비밀번호를 입력하세요.");
    }
  };
  const loadContents = async () => {
    const s = await AsyncStorage.getItem("BorderContents");
    if (s == null) {
      return;
    } else {
      setContents(JSON.parse(s));
    }
  };
  const saveContents = async (toSave) => {
    // STORAGE_KEY를 AsyncStorage에 스트링 형식으로 저장을 시킨다.
    await AsyncStorage.setItem("BorderContents", JSON.stringify(toSave));
  };

  const deleteContent = async (key) => {
    Alert.alert("삭제", "정말로 삭제하시겠습니까?", [
      {
        text: "네",
        onPress: () => {
          const newContents = { ...contents };
          // delete : 객체 삭제
          delete newContents[key];
          setContents(newContents);
          saveContents(newContents);
        },
      },
      { text: "아니요", style: "destructive" },
    ]);
    return;
  };

  return (
    <>
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
          <LoginButton title="Login" onPress={login} />
        </Container>
      ) : (
        <Main>
          <NavBar />
          <ScrollView>
            {Object.keys(contents).length !== 0 ||
            Object.keys(contents).length !== null
              ? Object.keys(contents).map((key) => {
                  return (
                    <BorderContents
                      key={key}
                      keys={key}
                      BorderPage={BorderPage}
                      deleteContent={deleteContent}
                      content={contents[key].text}
                    />
                  );
                })
              : null}
          </ScrollView>
          <ButtonBtnContainer>
            <ButtonContainer onPress={WritePage}>
              <Entypo name="plus" size={24} color="white" />
            </ButtonContainer>
          </ButtonBtnContainer>
          <Footer />
        </Main>
      )}
    </>
  );
}

export default Start;
