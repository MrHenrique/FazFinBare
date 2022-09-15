import React from "react";
import {
  Container,
  Title,
  Logo,
  Texto,
  ImgBg,
  TituloBotao,
  BotaoPress,
  AreaCont,
} from "./styles";
import { fazendas } from "../../components/Select/data";
import Select from "../../components/Select";
function Home({ navigation }) {
  const imgbg1 = "../../../assets/background7.jpg";
  return (
    <Container>
      <ImgBg source={require(imgbg1)} imageStyle={{ opacity: 0.5 }}>
        <AreaCont>
          <Logo source={require("../../../assets/FazFin.png")} />
          <Title>Bem-vindo(a)</Title>
          <Texto>Sua fazenda</Texto>
            <Select touchableText="Selecione sua fazenda" title="Fazendas" objKey="code" objValue="name" data={fazendas} />
          <BotaoPress onPress={() => navigation.navigate("CadastroFaz")}>
            <TituloBotao>{"Cadastrar fazenda"}</TituloBotao>
          </BotaoPress>
          <BotaoPress onPress={() => navigation.navigate("GeralFaz")}>
            <TituloBotao>{"Continuar"}</TituloBotao>
          </BotaoPress>
        </AreaCont>
      </ImgBg>
    </Container>
  );
}

export default Home;
