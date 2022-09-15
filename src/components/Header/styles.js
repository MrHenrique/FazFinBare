import { CurrentRenderContext } from "@react-navigation/native";
import { Directions } from "react-native-gesture-handler";
import styled from "styled-components";

export const Container = styled.SafeAreaView`
  height: 65px;
  flex-direction: row-reverse;
  align-items: center;
  padding-left: 14px;
  
  background: rgba(15, 109, 0, 0.75);
`;

export const MenuButton = styled.TouchableOpacity`
  height: 70px;
  align-items: center;
  flex-direction: row;
  padding-left: 15px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  margin-left: 14px;
`;
