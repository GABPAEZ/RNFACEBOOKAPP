import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Avatar from "./Avatar";
import user1 from "../assets/user1.jpg";

const TooBar = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.row}>
          <Avatar source={user1} />
          <TextInput
            style={styles.input}
            placeholder="En que estas pensando hoy?"
          />
        </View>
        <View style={styles.divider}></View>
        <View style={styles.row}>
          <View style={styles.menu}>
            <Ionicons name="ios-videocam" size={22} color="#f44337" />
            <Text style={styles.menuText}>Live</Text>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.menu}>
            <MaterialIcons
              name="photo-size-select-actual"
              size={20}
              color="#4caf50"
            />
            <Text style={styles.menuText}>Photo</Text>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.menu}>
            <MaterialCommunityIcons
              name="video-plus"
              size={22}
              color="#E141fc"
            />
            <Text style={styles.menuText}>Room</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomDivider}></View>
    </>
  );
};

export default TooBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 92,
    //backgroundColor: "orange",
  },
  row: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    width: "100%",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 11,
    paddingRight: 11,
    alignItems: "center",
  },
  input: {
    height: 50,
    width: "100%",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 8,
    paddingRight: 8,
  },
  divider: {
    width: "100%",
    height: 0.5,
    backgroundColor: "#F0F0F0",
  },
  menu: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 42,
  },
  menuText: {
    paddingLeft: 11,
    fontWeight: "500",
    fontSize: 12,
  },
  separator: {
    width: 1,
    height: 26,
    backgroundColor: "#F0F0F0",
  },
  bottomDivider: {
    width: "100%",
    height: 9,
    backgroundColor: "#F0f2f5",
  },
});
