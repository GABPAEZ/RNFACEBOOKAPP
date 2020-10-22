import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Entypo, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import user3 from "../assets/user3.jpg";
import user2 from "../assets/user2.jpg";
import post1 from "../assets/post1.jpg";
import post2 from "../assets/post2.jpg";
import Avatar from "./Avatar";
const Feed = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.row}>
            <Avatar source={user3} />
            <View style={{ paddingLeft: 10 }}>
              <Text style={styles.user}>Regi P</Text>
              <View style={styles.row}>
                <Text style={styles.time}>9m</Text>
                <Entypo name="dot-single" size={12} color="#747476" />
                <Entypo name="globe" size={10} color="#747476" />
              </View>
            </View>
          </View>
          <Entypo name="dots-three-horizontal" size={15} color="#222121" />
        </View>
        <Text style={styles.post}>
          I made a nice Aplication using NextJS, React-Native and Strap API
        </Text>
        <Image style={styles.photo} source={post1} />

        <View style={styles.footer}>
          <View style={styles.footerCount}>
            <View style={styles.row}>
              <View style={styles.iconCount}>
                <AntDesign name="like1" size={12} color="#FFFFFF" />
              </View>
              <Text style={styles.textCount}>88 likes</Text>
            </View>
            <Text style={styles.textCount}>2k comments</Text>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.footerMenu}>
            <TouchableOpacity style={styles.button}>
              <View style={styles.icon}>
                <AntDesign name="like2" size={20} color="#424040" />
              </View>
              <Text style={styles.text}>Likes</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <View style={styles.icon}>
                <MaterialCommunityIcons
                  name="comment-outline"
                  size={20}
                  color="#424040"
                />
              </View>
              <Text style={styles.text}>Comments</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <View style={styles.icon}>
                <MaterialCommunityIcons
                  name="share-outline"
                  size={20}
                  color="#424040"
                />
              </View>
              <Text style={styles.text}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomDivider}></View>
      </View>

      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.row}>
            <Avatar source={user2} />
            <View style={{ paddingLeft: 10 }}>
              <Text style={styles.user}>Josselyn Stark</Text>
              <View style={styles.row}>
                <Text style={styles.time}>9m</Text>
                <Entypo name="dot-single" size={12} color="#747476" />
                <Entypo name="globe" size={10} color="#747476" />
              </View>
            </View>
          </View>
          <Entypo name="dots-three-horizontal" size={15} color="#222121" />
        </View>
        <Text style={styles.post}>
          I am beautifull and take nice photos....
        </Text>
        <Image style={styles.photo} source={post2} />

        <View style={styles.footer}>
          <View style={styles.footerCount}>
            <View style={styles.row}>
              <View style={styles.iconCount}>
                <AntDesign name="like1" size={12} color="#FFFFFF" />
              </View>
              <Text style={styles.textCount}>50 likes</Text>
            </View>
            <Text style={styles.textCount}>365 comments</Text>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.footerMenu}>
            <TouchableOpacity style={styles.button}>
              <View style={styles.icon}>
                <AntDesign name="like2" size={20} color="#424040" />
              </View>
              <Text style={styles.text}>Likes</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <View style={styles.icon}>
                <MaterialCommunityIcons
                  name="comment-outline"
                  size={20}
                  color="#424040"
                />
              </View>
              <Text style={styles.text}>Comments</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <View style={styles.icon}>
                <MaterialCommunityIcons
                  name="share-outline"
                  size={20}
                  color="#424040"
                />
              </View>
              <Text style={styles.text}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomDivider}></View>
      </View>
    </>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //height: 100,
    //backgroundColor: "orange",
  },
  header: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 6,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 11,
    paddingRight: 11,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
  },
  user: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#222121",
  },
  time: {
    fontSize: 9,
    color: "#747476",
  },
  post: {
    fontSize: 12,
    color: "#222121",
    lineHeight: 16,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 11,
    paddingRight: 11,
  },
  photo: {
    marginTop: 9,
    width: "100%",
    height: 300,
  },
  footer: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 11,
    paddingRight: 11,
  },
  footerCount: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 0,
    paddingRight: 0,
  },
  iconCount: {
    backgroundColor: "#1878f3",
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 6,
  },
  textCount: {
    fontSize: 11,
    color: "#424040",
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#F2F2F2",
  },
  footerMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 0,
    paddingRight: 0,
  },
  button: {
    flexDirection: "row",
  },
  icon: {
    marginRight: 6,
  },
  text: {
    fontSize: 12,
    color: "#424040",
  },
  bottomDivider: {
    width: "100%",
    height: 9,
    backgroundColor: "#F0f2f5",
  },
});
