import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Avatar from "./Avatar";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";
import user4 from "../assets/user4.jpg";
import user5 from "../assets/user5.jpg";

const Users = () => {
  return (
    <>
      <View style={styles.container}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingLeft: 11 }}
        >
          <TouchableOpacity style={styles.room}>
            <MaterialCommunityIcons
              name="video-plus"
              size={26}
              color="#E141FC"
            />
            <Text style={styles.text}>Create Room</Text>
          </TouchableOpacity>

          <View style={styles.user}>
            <Avatar source={user2} online={true} />
          </View>
          <View style={styles.user}>
            <Avatar source={user3} online={true} />
          </View>
          <View style={styles.user}>
            <Avatar source={user4} online={false} />
          </View>
          <View style={styles.user}>
            <Avatar source={user5} online={false} />
          </View>
          {/* repito las lineas para probar el scroll horizontal */}
          <View style={styles.user}>
            <Avatar source={user2} online={true} />
          </View>
          <View style={styles.user}>
            <Avatar source={user3} online={true} />
          </View>
          <View style={styles.user}>
            <Avatar source={user4} online={false} />
          </View>
          <View style={styles.user}>
            <Avatar source={user5} online={false} />
          </View>
        </ScrollView>
      </View>
      <View style={styles.bottomDivider}></View>
    </>
  );
};

export default Users;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 58,
    //backgroundColor: "orange",
    flexDirection: "row",
    alignItems: "center",
  },
  room: {
    width: 115,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#82b1ff",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 8,
    paddingRight: 15,
    marginRight: 12,
  },
  text: {
    color: "#1777f2",
    fontSize: 12,
    paddingLeft: 6,
  },
  user: {
    marginRight: 13,
  },
  bottomDivider: {
    width: "100%",
    height: 9,
    backgroundColor: "#F0f2f5",
  },
});
