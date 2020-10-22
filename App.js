import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import AppBar from "./components/AppBar";
import Feed from "./components/Feed";
import Story from "./components/Story";
import TooBar from "./components/TooBar";
import Users from "./components/Users";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#ffff" barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <AppBar />
          <TooBar />
          <Users />
          <Story />
          <Feed />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
