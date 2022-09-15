import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Modal,
  SafeAreaView,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
const Touchable = (
  text = "Selecione sua fazenda",
  onPress,
  selected,
  objValue
) => {
  const TouchableComponent = () => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.touchableContainer}>
        <Text style={styles.touchableText}>
          {selected === null ? text : selected?.[objValue]}
        </Text>
        <MaterialCommunityIcons name="chevron-right" color="white" size={26} />
      </TouchableOpacity>
    );
  };
  return { TouchableComponent };
};

const Option = (item, value, selected, objKey, onPress) => {
  const OptionComponent = () => {
    return (
      <TouchableOpacity
        style={[
          styles.optionContainer,
          {
            backgroundColor:
              selected?.[objKey] === item?.[objKey] ? "#0F6D00" : "#004513",
          },
        ]}
        onPress={onPress}
      >
        <Text
          style={[
            styles.optionText,
            {
              fontWeight:
                selected?.[objKey] === item?.[objKey] ? "bold" : "normal",
            },
          ]}
        >
          {item?.[value]}
        </Text>
        {selected?.[objKey] === item?.[objKey] ? (
          <MaterialCommunityIcons name="check" size={18} color="white" />
        ) : null}
      </TouchableOpacity>
    );
  };
  return { OptionComponent };
};

const Select = ({
  touchableComponent = Touchable,
  optionComponent = Option,
  touchableText = "Select",
  title = "",
  data = [],
  objKey = "id",
  objValue = "name",
}) => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const { TouchableComponent } = touchableComponent(
    touchableText,
    () => setVisible(true),
    selected,
    objValue
  );
  function renderOption(item) {
    const { OptionComponent } = optionComponent(
      item,
      objValue,
      selected,
      objKey,
      () => toggleSelect(item)
    );
    return <OptionComponent />;
  }
  function toggleSelect(item) {
    if (item?.[objKey] === selected?.[objKey]) {
      setSelected(null);
    } else {
      setSelected(item);
      setVisible(false);
    }
  }
  return (
    <>
      <TouchableComponent />
      <Modal visible={visible} animationType="slide">
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{title}</Text>
            </View>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <MaterialCommunityIcons name="close" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <FlatList
            style={styles.liststyle}
            data={data}
            keyExtractor={(_, index) => String(index)}
            renderItem={({ item }) => renderOption(item)}
          />
        </SafeAreaView>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  liststyle: {
    backgroundColor: "#00290C",
  },
  touchableContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderBottomColor: "white",
    borderBottomWidth: 1,
    width: 300,
  },
  touchableText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  header: {
    height: 45,
    backgroundColor: "#004513",
    borderBottomColor: "#00290C",
    borderBottomWidth: 1,
    flexDirection: "row-reverse",
    alignItems: "center",
    paddingBottom: 8,
    paddingTop: 8,
    paddingHorizontal: 12,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginLeft: -38,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  optionContainer: {
    backgroundColor: "#0F6D00",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderBottomColor: "#00290C",
    borderBottomWidth: 1,
  },
  optionText: {
    color: "white",
    fontSize: 14,
  },
});
export default Select;
