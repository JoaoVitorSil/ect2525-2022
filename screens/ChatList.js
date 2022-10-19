import React, {useState , useEffect} from 'react'
import { Text, View, StyleSheet, StatusBar, FlatList, Image } from 'react-native'

export default function ChatList() {

  const [chatlist, setchatlist] = useState();

  useEffect(()=>{
    async function getData(){
        const response = await fetch('https://mobile.ect.ufrn.br:3000/chatlist');
        const chatlist = await response.json();
        setchatlist(chatlist);
    }
    getData();
  }, [])

  function renderItem({item}){
    return(
        <View style={styles.chat}>
            <Image style={styles.image} source={{uri: item.imgPerfilUri}}/>
            <View style={styles.textbox}>
                <Text style={styles.nome}>{item.nomeUsuario}</Text>
                <Text>{item.ultimaMensagem}</Text>
            </View>
        </View>
    ) 

  }
  return (
    <View style={styles.container}>
        <StatusBar style={'auto'}/>
        <FlatList
            data={chatlist}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    chat: {
        height: 60,
        flexDirection: 'row',
    },
    image: {
        height: 50,
        width: 50,
        margin: 5,
        borderRadius: 25, 
    },
    textbox:{
        justifyContent: 'center',
    },
    nome:{
        fontWeight: 'bold',
    }
});