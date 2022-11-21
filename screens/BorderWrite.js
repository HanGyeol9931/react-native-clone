import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import styled from "styled-components/native";
import { Main } from "../Style/StyleCom";
import NavBar from "../BorderWriteCom/Nav";
import AsyncStorage from "@react-native-async-storage/async-storage";
const BorderContainer = styled.View`
  /* background: red; */
  height: 100%;
  flex-direction: row;
  padding: 10px 10px;
  border-bottom-width: 0.25px gray;
  /* background-color: red; */
`;
const BorderView = styled.View`
  width: 85%;
  flex-direction: column;
`;
const Profile = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const WriteInput = styled.TextInput`
  font-size: 20px;
  font-weight: 600;
  margin-left: 10px;
  padding-left: 10px;
  /* background-color: red; */
  width: 90%;
  height: 100%;
`;

function BorderWrite({ navigation }) {
  const [back, setBack] = useState(true);
  const [text, setText] = useState("");
  const [contents, setContents] = useState({});

  useEffect(() => {
    if (text !== "") {
      setBack(false);
    } else {
      setBack(true);
    }
  }, [text]);
  useEffect(() => {
    loadContents();
  }, []);

  const onChangeText = (payload) => setText(payload);

  const MainPage = () => {
    navigation.navigate("메인");
    setText("");
  };
  const saveContents = async (toSave) => {
    // STORAGE_KEY를 AsyncStorage에 스트링 형식으로 저장을 시킨다.
    await AsyncStorage.setItem("BorderContents", JSON.stringify(toSave));
  };
  const addContents = async () => {
    const newContents = {
      // 기존에 있던 toDos를 불러와서 [Date.now()] : {text ,work : working }를 추가하는 작업
      ...contents,
      [Date.now()]: { text },
    };
    setContents(newContents);
    await saveContents(newContents);
    setText("");
    navigation.navigate("메인", { write: false });
  };
  const loadContents = async () => {
    const s = await AsyncStorage.getItem("BorderContents");
    if (s == null) {
      return;
    } else {
      setContents(JSON.parse(s));
    }
  };
  return (
    <Main>
      <NavBar onPress={MainPage} addContents={addContents} disabled={back} />
      <BorderContainer>
        <Profile
          source={{
            uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEHBhAIBw8OFRUODw8QEBMSEBAPEA4SFhMWFhYSFx8YHTQgGRoxHRMTITEhJSkuLi4uFx8zODMsNyktLisBCgoKDg0OGhAQGjYlHyU1Ky0tKy0wKy0tLi0tLS0rLS0tLS0tLS0tKy03NystLSsrNS0tLS03Kzc3LS0rLS0tN//AABEIAOEA4QMBIgACEQEDEQH/xAAaAAEAAgMBAAAAAAAAAAAAAAAABAUCAwYB/8QAMxABAAECAwUFBwQDAQAAAAAAAAECAwQRcQUhMTJBEhNRYXI0gZGhsdHhIkKSwSMzghT/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAwIBBAX/xAAcEQEBAQEBAQEBAQAAAAAAAAAAAQIRAzESQSH/2gAMAwEAAhEDEQA/AOsAe980AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHvHgscLs/d27/8fu5bx2S1At2qrk5W4mdISKdn3J6RGs/ZbUxFMZUxlo9Y/ak84qJ2fcjhETpLRcs1Wv8AZTMfRfExnGUn7L5xzotMVs+Ko7VjdPh0nTwVkx2Zyno3L1O5seAOuAAAAAAAAAAAAAAAAAAANlm33t2KI6yCds3DZR39f/Pl5rAiMoyjoJW9Xk5ABx0AAQto4bt0d7Rxjj5wmhLws7HOjdirXc36qI8d2ktKzzgAAAAAAAAAAAAAAAAACZsunPE5+FMz/X9oabsqcsRMeNM/WHNfHc/VqAkuAAAAAAq9rU5XqavGnL4T+UFYbWn/ACUx5T9fwr1c/ENfQB1wAAAAAAAAAAAAAAAAbsJc7rEU1T45TpO5pAjohFwGI7612auNO6fOPFKRv+PRL0AAAABoxl/uLOccZ3U/cLeK3H3O8xU5dP0/D85oz14tHnt6AAAAAAAAAAAAAAAAAAAAztXJtVxXRxhcYXFU4iMuE9Y+ykexOW+HLOu51x0IqLW0K7cZVZVa8fik07Tp/dTV7piWPzVZuJwgztOn9tNXvyhHu7Qrr3UZU6b5c/NLuLDEYmmxT+rj0jrKnvXZvXO3X+IjwYTPanOp4pM8T1roA6yAAAAAAAAAAAAAAAAAAAAAADKmmauWJnSM2cWK54UV/wAZBqG2cPXHGiv+MsJomnmiY1jIOMQAAAAAAAAAAAAAAAAAAABnatTdq7NuM/6WVjZ0U772+fDp+XLZHZm1W0W5uTlREzpCVb2dVVvrmI+crSmmKYypiI03PWLtSec/qJb2dRTzZz78o+TfRYoo5aafhvbBztakkAHHQAGFVmmvmppn3Q0V7Poq4RMaT90oOlkqsubNmN9uqJ13SiXbNVqcrkTH0XxMZxlLU1WLiOdFtf2fTXvt/pn5K69Yqs1ZXI0npLcsqdzY1AOuAAAAAAAAAADdhcPOIudmOEcZ8GleYSz3NiKevGdXNXjWc9rOzaizR2bcfedWYJLAAAAAAAAAAAADyuiK6ezXGcS9AU2Mwv8A56s6eWeHl5Iy/vW4u2poq6/LzUMx2ZynpuUzeo7zyvAGmQAAAAAAAHtPNGroXPU80aw6FjanmAMKAAAAAAAAAAAAAACixW7E1+qfqvVHi/aq/VLeGPT40gNpAAAAAAAAMqeaNYdA5+nmjWHQMbU8wBhQAAAAAAAAAAAAAAUeL9qr9UrxR4v2qv1S3hj0+NIDaQAAAAAAADKnmjWHQOfo541h0DG1PMAYUAAAAAAAAAAAAAAFHi/aq/VK8UeL9qr9Ut4Y9PjSA2kAAAAAAAAyo541h0AMbU8wBhQAAAAAAAAAAAAAAUeL9qr9Ug3hj0+NIDaQAAAD/9k=",
          }}
        />
        <BorderView>
          <WriteInput
            multiline
            value={text}
            autoFocus={true}
            placeholder="무슨 일이 일어나고 있나요?"
            onChangeText={onChangeText}
          />
        </BorderView>
      </BorderContainer>
    </Main>
  );
}

export default BorderWrite;
