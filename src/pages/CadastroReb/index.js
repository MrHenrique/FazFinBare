import React, { useState } from "react";
import Header from "../../components/Header";
import {
  Container,
  Texto,
  Logo,
  Title,
  ImgBg,
  TituloBotao,
  BotaoPress,
  AreaCont,
  CampoTexto,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

function CadastroReb() {
  const [nomereb, setNomereb] = useState("");
  const [QtdAni, setQtdAni] = useState("");
  function cadReb() {
    const data = {
      nomereb,
      QtdAni,
    };
    console.log(data);
  }
  const navigation = useNavigation();
  const imgbg1 = "../../../assets/bg6.jpg";
  return (
    <Container>
      <ImgBg source={require(imgbg1)} imageStyle={{ opacity: 0.5 }}>
        <Header title={"Cadastro Rebanho"} />
        <AreaCont>
          <Logo source={require("../../../assets/FazFin.png")} />
          <Texto>Nome do Rebanho</Texto>
          <CampoTexto
            onChangeText={setNomereb}
            value={nomereb}
            placeholder="Ex: Vaca solteira"
          ></CampoTexto>
          <Texto>Quantidade de animais</Texto>
          <CampoTexto
            onChangeText={setQtdAni}
            value={QtdAni}
            placeholder="Quantos animais no rebanho?"
          ></CampoTexto>
          <BotaoPress>
            <TituloBotao>{"Cadastrar"}</TituloBotao>
          </BotaoPress>
          <BotaoPress onPress={() => navigation.navigate("GeralFaz")}>
            <TituloBotao>{"Voltar"}</TituloBotao>
          </BotaoPress>
        </AreaCont>
      </ImgBg>
    </Container>
  );
}

export default CadastroReb;
