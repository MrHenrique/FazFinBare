import React from 'react';
import { Text, Dimensions, View, Image, StyleSheet, Alert, Pressable, Button } from 'react-native';
import { Directions } from 'react-native-gesture-handler';
import Header from "../../components/Header";
import { Containertudo } from "./styles";

const ImgLeite = "../../../assets/milk-bottle.png";
const ImgAliment = "../../../assets/cow.png";
const ImgManejo = "../../../assets/smart-farm.png";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ScreenHeight = Dimensions.get('screen').height;

function PageLancavacas({ navigation }) {
    return (
        <View style={styles.ContainerTudo}>
            <Header title="Lançar Contas"></Header>

            <Pressable style={styles.botaos}>
                <Image style={styles.imagem} source={require(ImgLeite)} />
                <Text style={styles.Texto}>      Leite</Text>
            </Pressable>

            <Pressable style={styles.botaos}>
                <Image style={styles.imagem} source={require(ImgAliment)} />
                <Text style={styles.Texto1}>Alimentação</Text>
            </Pressable>

            <Pressable style={styles.botaos}>
                <Image style={styles.imagem} source={require(ImgManejo)} />
                <Text style={styles.Texto}>   Manejo </Text>
            </Pressable>

            <View style={styles.botaovoltar}>
                <Button color='#008000' onPress={() => navigation.goBack()} title="Voltar" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerbotaos: {
        width: windowWidth - 60,
        margin: 5,
    },
    botaos: {
        alignSelf: 'stretch',
        alignContent: 'space-around',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderRadius: windowHeight * 0.015,
        paddingTop: windowHeight * 0.05,
        paddingBottom: windowHeight * 0.05,
        margin: 5,
        backgroundColor: 'white',
    },
    Texto: {
        margin: 10,
        fontSize: 35,
        fontWeight: 'bold',
    },
    Texto1: {
        margin: 10,
        fontSize: 30,
        fontWeight: 'bold',
    },
    botaovoltar: {
        margin: 5,
        paddingTop: 30,

        paddingBottom: 20,
        paddingStart: 30,
        paddingEnd: 30,

    },
    imagem: {
        height: 60,
        width: 60,
    },
    ContainerTudo: {
        backgroundColor: '#f2f2f2',
        flex: 1,
}  

});

export default PageLancavacas;