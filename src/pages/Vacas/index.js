import React from 'react';
import { Button, Dimensions, View, SafeAreaView, StyleSheet, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";
import Lista_vacas from '../../components/Lista_Vacas';

import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function PageListavacas({ navigation }) {

    return (

        <View style={styles.container}>
            <SafeAreaView>
                <Header title={"Vacas"}></Header>
                <Lista_vacas />
                <View style={styles.botaovoltar}>
                    <Button color='#008000' onPress={() => navigation.goBack()} title="Voltar" />
                </View>
            </SafeAreaView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#008AA1',
        paddingEnd: 10,
    },
    botaovoltar: {
        paddingTop: 40,
        paddingBottom: 40,
        
    }


});

export default PageListavacas;
