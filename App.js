import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Constants from 'expo-constants'
import { FontAwesome5 } from '@expo/vector-icons'


export default function App() {
  return (
    <View style={styles.container}>
        <StatusBar style='auto'/>
        <View style={styles.header}>
          <Image style={styles.ufrngram} source={require('./assets/images/ufrngram.png')} />
          <FontAwesome5 name='paper-plane' size={24} color='black'/>
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
                <FontAwesome5 name='ellipsis-h' size={16} color='black'/>
              </View>
              <View>
                <Image style={styles.postimg} aspectRatio={1.777} source={require('./assets/images/tiny_toon.jpg')}></Image>
              </View>
              <View style={styles.footer}>
                <FontAwesome5 style={styles.footericon} name='heart' size={36} color='black'/>
                <FontAwesome5 style={styles.footericon} name='comment' size={36} color='black'/>
              </View>
          </View>
          <View  style={styles.post}>
              <View style={styles.postheader}>
                <View style={styles.postheaderesquerda}>
                  <Image style={styles.postheaderimg} source={require('./assets/images/frajola.png')}/>
                  <Text>Frajola</Text>
                </View>
                <FontAwesome5 name='ellipsis-h' size={16} color='black'/>
              </View>
              <View>
                <Image style={styles.postimg} aspectRatio={1.777} source={require('./assets/images/baby-looney-tunes.jpg')}></Image>
              </View>
              <View style={styles.footer}>
                <FontAwesome5 style={styles.footericon} name='heart' size={36} color='black'/>
                <FontAwesome5 style={styles.footericon} name='comment' size={36} color='black'/>
              </View>
          </View>
          <View  style={styles.post}>
              <View style={styles.postheader}>
                <View style={styles.postheaderesquerda}>
                  <Image style={styles.postheaderimg} source={require('./assets/images/pernalonga.png')}/>
                  <Text>Perna</Text>
                </View>
                <FontAwesome5 name='ellipsis-h' size={16} color='black'/>
              </View>
              <View>
                <Image style={styles.postimg} aspectRatio={1.777} source={require('./assets/images/looneytunes.webp')}></Image>
              </View>
              <View style={styles.footer}>
                <FontAwesome5 style={styles.footericon} name='heart' size={36} color='black'/>
                <FontAwesome5 style={styles.footericon} name='comment' size={36} color='black'/>
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
    backgroundColor: '#fff',
  },
  post: {
    backgroundColor: '#fff',

  },
  postheader: {
    flexDirection: 'row',
    height: 55,
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
    height: undefined,
  },
  footer: {
    height: 50,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  footericon: {
    margin: 5,
  }
});
  