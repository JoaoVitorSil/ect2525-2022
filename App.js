import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Constants from 'expo-constants'
import { FontAwesome } from '@expo/vector-icons'


export default function App() {
  return (
    <View style={styles.container}>
        <StatusBar style='auto'/>
        <View style={styles.header}>
          <Image style={styles.ufrngram} source={require('./assets/images/ufrngram.png')} />
          <FontAwesome name='paper-plane' size={24} color='black'/>
        </View>
        <View style={styles.stories}>
          <View style={styles.story}>
            <Image style={styles.imgstory} source={require('./assets/images/pernalonga.png')}/>
            <Text>Perna</Text>
          </View>
          <View style={styles.story}>
            <Image style={styles.imgstory} source={require('./assets/images/frajola.png')}/>
            <Text>Frajola</Text>
          </View>
          <View style={styles.story}>
            <Image style={styles.imgstory} source={require('./assets/images/patolino.png')}/>
            <Text>Patolino</Text>
          </View>
          <View style={styles.story}>
            <Image style={styles.imgstory} source={require('./assets/images/taz.webp')}/>
            <Text>Taz</Text>
          </View>
          <View style={styles.story}>
            <Image style={styles.imgstory} source={require('./assets/images/piupiu.png')}/>
            <Text>Piu Piu</Text>
          </View>
        </View>
        <View style={styles.feed}>
          <View  style={styles.post}>
              <View style={styles.postheader}>
                <View style={styles.postheaderesquerda}>
                  <Image style={styles.postheaderimg} source={require('./assets/images/piupiu.png')}/>
                  <Text>Piu Piu</Text>
                </View>
                <FontAwesome name='ellipsis-h' size={24} color='black'/>
              </View>
              <View>
                <Image style={styles.postimg} source={require('./assets/images/tiny_toon.jpg')}></Image>
              </View>
          </View>
        </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },
  header: {
    height: 50,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10
  },
  ufrngram: {
    height: 25,
    width: 110,
  },
  stories: {
    height: 90,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  story: {
    height: 90,
    width: 90,
    backgroundColor: '#fff', 
    alignItems: 'center',
  },
  imgstory: {
    width: 70,
    height: 70, 
    borderRadius: 35,
  },
  feed: {
    flex: 1,
    backgroundColor: 'red',
  },
  post: {
    backgroundColor: 'blue',

  },
  postheader: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5,
  },
  postheaderesquerda: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  postheaderimg: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  postimg: {
    width: '100%',
  }
});
  