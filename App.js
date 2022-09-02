import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert, ImageBackground } from 'react-native';

const image = { uri: "https://1.bp.blogspot.com/-wFpliM65Egg/YX6aqcp7UtI/AAAAAAAAixY/AEXmzsmPQqcaTl4_dewCrdtnIfk78PGEQCNcBGAsYHQ/s16000/os-melhores-wallpapers-de-naruto-celular%2B%25281%2529.png" };

export default function App() {
  return (
    <View style={styles.container}>
        
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <StatusBar 
          backgroundColor='white' 
        />
        
        <View style={styles.container1}>
          <Text style={styles.text1}>Você caiu no meu genjutsu</Text>
        </View>
        <View style={styles.container2}>
          <Button
            color= "red"
            title="Sharingan"
            onPress={() => Alert.alert('Me pague uma coxinha')}
          />
        </View>
        
      </ImageBackground>    
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 50,
  },

  image: {
    flex: 1,
    width: '100%',
    flexDirection: "column",
    justifyContent: "center"
  },

  text1: {
    fontSize: 30,
    color: 'white', 
    marginTop: 40,
    alignSelf: "center",
    
  }
});
