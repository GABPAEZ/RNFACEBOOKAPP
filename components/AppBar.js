import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>facebook</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button}>
          <Feather name="search" size={29} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons name="facebook-messenger" size={29} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 58,
    backgroundColor: "#FFF",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 11,
    paddingBottom: 11,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "#3a86e9",
    fontSize: 25,
    fontWeight: "bold",
    letterSpacing: -0.3,
  },
  row: {
    flexDirection: "row",
  },
  button: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#eeeeee",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 16,
  },
});
