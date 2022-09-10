import React from "react";
import { StyleSheet, View, Image, Text, FlatList } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Feed() {
  const feed = [
    {
      id: 1,
      nome: "Piu Piu",
      imgPerfil: require("../assets/images/piupiu.png"),
      img: require("../assets/images/tiny_toon.jpg"),
      aspectRatio: 1.7751,
    },
    {
      id: 2,
      nome: "Frajola",
      imgPerfil: require("../assets/images/frajola.png"),
      img: require("../assets/images/baby-looney-tunes.jpg"),
      aspectRatio: 1.5689,
    },
    {
      id: 3,
      nome: "Perna",
      imgPerfil: require("../assets/images/pernalonga.png"),
      img: require("../assets/images/looneytunes.webp"),
      aspectRatio: 1.3333,
    },
  ];

  function renderItem({ item }) {
    return (
      <View style={styles.post}>
        <View style={styles.postheader}>
          <View style={styles.postheaderesquerda}>
            <Image
              style={styles.postheaderimg}
              source={item.imgPerfil}
            />
            <Text>{item.nome}</Text>
          </View>
          <FontAwesome5 style={{marginRight:15}} name="ellipsis-v" size={16} color="black" />
        </View>
        <View>
          <Image
            style={styles.postimg}
            aspectRatio={item.aspectRatio}
            source={item.img}
          ></Image>
        </View>
        <View style={styles.footer}>
          <FontAwesome5
            style={styles.footericon}
            name="heart"
            size={36}
            color="black"
          />
          <FontAwesome5
            style={styles.footericon}
            name="comment"
            size={36}
            color="black"
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.feed}>
      <FlatList 
        data={feed}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator ={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  feed: {
    flex: 1,
    backgroundColor: "#fff",
  },
  post: {
    backgroundColor: "#fff",
  },
  postheader: {
    flexDirection: "row",
    height: 55,
    alignItems: "center",
    justifyContent: "space-between",
    margin: 5,
  },
  postheaderesquerda: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
  },
  postheaderimg: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  postimg: {
    width: "100%",
    height: undefined,
  },
  footer: {
    height: 50,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
  },
  footericon: {
    margin: 5,
  },
});
