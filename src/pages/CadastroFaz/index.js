import React, { useState, useEffect } from "react";
import {
  Container,
  Texto,
  Logo,
  ImgBg,
  TituloBotao,
  BotaoPress,
  AreaCont,
  CampoTexto,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { database } from "../../databases";
import { CadFazModel } from "../../databases/model/cadFazModel";
import { Alert } from "react-native";
import {Select} from "../../components/Select";
function CadastroFaz() {
  const [nomefaz, setNomefaz] = useState("");
  const [proprietario, setProprietario] = useState("");
  const [tipoprod, setTipoprod] = useState("");
  async function handleSave() {
    await database.write(async () => {
      await database.get("cadFaz").create((data) => {
        data.nomefaz = nomefaz,
        data.proprietario = proprietario,
        data.tipoprod = tipoprod;
      });
    });
    Alert.alert("Cadastro com sucesso!");
  }
  async function fetchData() {
    const cadFazCollection = database.get("cadFaz");
    const response = await cadFazCollection.query().fetch();
    console.log(response);
  }
  useEffect(() => {
    fetchData();
  }, []);
  const navigation = useNavigation();
  const imgbg1 = "../../../assets/backgroundCad.jpg";
  return (
    <Container>
      <ImgBg source={require(imgbg1)} imageStyle={{ opacity: 0.5 }}>
        <AreaCont>
          <Logo source={require("../../../assets/FazFin.png")} />
          <Texto>Nome da fazenda</Texto>
          <CampoTexto
            onChangeText={setNomefaz}
            value={nomefaz}
            placeholder="Qual o nome da sua Fazenda?"
          ></CampoTexto>
          <Texto>Proprietário</Texto>
          <CampoTexto
            onChangeText={setProprietario}
            value={proprietario}
            placeholder="Qual o nome do proprietário?"
          ></CampoTexto>
          <Texto>Tipo de produção</Texto>
          <CampoTexto
            onChangeText={setTipoprod}
            value={tipoprod}
            placeholder="Ex: Pecuaria Leiteira"
          ></CampoTexto>
          <BotaoPress onPress={handleSave}>
            <TituloBotao>{"Cadastrar"}</TituloBotao>
          </BotaoPress>
          <BotaoPress onPress={() => navigation.navigate("Home")}>
            <TituloBotao>{"Voltar"}</TituloBotao>
          </BotaoPress>
        </AreaCont>
      </ImgBg>
    </Container>
  );
}

export default CadastroFaz;
