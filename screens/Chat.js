import React, {useState, useEffect} from 'react'
import {StatusBar} from 'expo-status-bar';
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

export default function Chat({route}) {
    const {id} = route.params;
    
    const [chat, setChat] = useState([]);

  useEffect(()=>{
    async function getData(){
        const response = await fetch('https://mobile.ect.ufrn.br:3000/chatlist/'+ id);
        const chat = await response.json();
        setChat(chat);
    }
    getData();
  }, [])

  function renderItem({item}){ 
    return <View style={item.autor ? styles.messagemAutor : styles.messagem}>
        <Text>{item.texto}</Text>  
    </View>
  }    
  return (
    <View style={styles.container}>
        <StatusBar style='auto'/>
        <View style={styles.chatContainer}>
            <FlatList 
                data={chat.mensagens}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
        <View style={styles.inputContainer}>
            <TextInput style={styles.input}></TextInput>
            <TouchableOpacity style={styles.sendButton}><Text>Enviar</Text></TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    chatContainer: {
        flex: 1,
        margin: 5,
    },  
    inputContainer: {
        flexDirection: 'row',
        height: 50,
    },
    messagem: {
        height: 30,
        backgroundColor: 'grey',
        borderRadius:5,
        justifyContent: 'center',
        padding: 5,
        alignSelf: 'flex-start'
    },
    messagemAutor: {
        height: 30,
        backgroundColor: 'green',
        borderRadius:5,
        justifyContent: 'center',
        padding: 5,
        alignSelf: 'flex-end'
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        margin: 5,
    }, 
    sendButton: {
        width: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
});