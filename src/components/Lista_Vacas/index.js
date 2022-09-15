import React from "react";
import {
  View,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import dataVacas from "./vacas";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function Lista_vacas() {
  return (
    <FlatList
      data={dataVacas}
      renderItem={({ item }) => (
        <View style={styles.containerVacas}>
          <TouchableOpacity activeOpacity={0.5} style={styles.cardVacas}>
            <Text style={styles.textVacas}>{item.name}</Text>
          </TouchableOpacity>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  containerVacas: {
    width: windowWidth,
    margin: 5,
    alignItems: "center",
  },
  cardVacas: {
    padding: 15,
    backgroundColor: "#D9D9D9",
    alignItems: "center",
    borderRadius: windowHeight * 0.015,
    width: windowWidth - 60,
  },
  textVacas: {
    color: "#000",
    fontSize: windowWidth * 0.05,
    fontWeight: "bold",
  },
});

export default Lista_vacas;
