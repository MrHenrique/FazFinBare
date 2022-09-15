import styled from "styled-components/native";

export const AreaCont = styled.View`
  align-items: center;
  justify-content: center;
`;
export const Container = styled.SafeAreaView`
  background-color: #006773;
  flex: 1;
`;
export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;
export const Logo = styled.Image`
  width: 90px;
  height: 90px;
  margin-top: 50px;
  opacity: 0.9;
`;
export const Texto = styled.Text`
  font-weight: normal;
  font-size: 17px;
  color: #ffffff;
  margin-top : 70px;
`;
export const ImgBg = styled.ImageBackground`
  flex: 1;
  object-fit: cover;
  width: 100%;
`;
export const BotaoPress = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background: rgba(15, 109, 0, 0.9);
  width: 360px;
  height: 40px;
  bottom: -215px;
  margin: 10px;
`;
export const TituloBotao = styled.Text`
  font-size: 16px;
  line-height: 21px;
  font-weight: bold;
  letter-spacing: 0.25px;
  color: white;
`;