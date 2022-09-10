import React from "react";
import { StyleSheet, View, Image, Text, FlatList } from "react-native";

export default function Stories() {

    const stories = [
        {
            id: 1,
            nome: 'Perna',
            src: require("../assets/images/pernalonga.png"),
        },
        {
            id: 2,
            nome: 'Frajola',
            src: require("../assets/images/frajola.png"),
        },
        {
            id: 3,
            nome: 'Patolino',
            src: require("../assets/images/patolino.png"),
        },
        {
            id: 4,
            nome: 'Taz',
            src: require("../assets/images/taz.webp"),
        },
        {
            id: 5,
            nome: 'Piu Piu',
            src: require("../assets/images/piupiu.png"),
        },
    ];

    function renderItem({item}){
        return(
            <View style={styles.story}>
                <Image
                    style={styles.imgstory}
                    source={item.src}
                />
                <Text>{item.nome}</Text>
            </View>
        );
    }
    
  return (
    <View style={styles.stories}>
      <FlatList
        data={stories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  stories: {
    height: 90,
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  story: {
    height: 90,
    width: 90,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  imgstory: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
});
