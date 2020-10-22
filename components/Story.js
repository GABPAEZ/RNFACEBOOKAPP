import React from "react";
import { View, Image, StyleSheet, ScrollView, Text } from "react-native";
import story1 from "../assets/story1.jpg";
import story2 from "../assets/story2.jpg";
import story3 from "../assets/story3.jpg";
import story4 from "../assets/story4.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";
import user4 from "../assets/user4.jpg";
import user5 from "../assets/user5.jpg";
import { AntDesign } from "@expo/vector-icons";
import Avatar from "./Avatar";

const Story = () => {
  return (
    <>
      <View style={styles.container}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingLeft: 11 }}
        >
          <View style={styles.card}>
            <Image style={styles.cardStory} source={story1} />
            <View style={styles.carduser}>
              <AntDesign name="plus" size={24} color="#1777f2" />
            </View>
            <View style={styles.cardfooter}>
              <Text style={styles.text}>Add to Story</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Image style={styles.cardStory} source={story2} />
            <View style={styles.carduser}>
              {/* <AntDesign name="plus" size={24} color="#1777f2" /> */}
              <Avatar source={user2} story={true} />
            </View>
            <View style={styles.cardfooter}>
              <Text style={styles.text}>Josselyn Stark</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Image style={styles.cardStory} source={story3} />
            <View style={styles.carduser}>
              {/* <AntDesign name="plus" size={24} color="#1777f2" /> */}
              <Avatar source={user3} story={true} />
            </View>
            <View style={styles.cardfooter}>
              <Text style={styles.text}>JeanPiero Uala</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Image style={styles.cardStory} source={story4} />
            <View style={styles.carduser}>
              {/* <AntDesign name="plus" size={24} color="#1777f2" /> */}
              <Avatar source={user4} story={true} />
            </View>
            <View style={styles.cardfooter}>
              <Text style={styles.text}>Anna Armas</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Image style={styles.cardStory} source={story1} />
            <View style={styles.carduser}>
              {/* <AntDesign name="plus" size={24} color="#1777f2" /> */}
              <Avatar source={user5} story={true} />
            </View>
            <View style={styles.cardfooter}>
              <Text style={styles.text}>Josselyn Stark</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.bottomDivider}></View>
    </>
  );
};

export default Story;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 192,
    //backgroundColor: "orange",
    flexDirection: "row",
    alignItems: "center",
  },
  card: {
    width: 106,
    height: 170,
    position: "relative",
    marginRight: 8,
  },
  cardStory: {
    width: "100%",
    height: 170,
    borderRadius: 12,
  },
  carduser: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    width: 39,
    height: 39,
    alignItems: "center",
    justifyContent: "center",
  },
  cardfooter: {
    width: "100%",
    position: "absolute",
    bottom: 12,
    left: 9,
  },
  text: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#FFFFFF",
    textShadowColor: "1 1 1 rgba(0,0,0,0.4)",
  },
  bottomDivider: {
    width: "100%",
    height: 9,
    backgroundColor: "#F0f2f5",
  },
});
