import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button, Alert, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';

export default function App() {


  const clickme =()=> console.log('clisk work!');
  const title =()=> Alert.arelt("My app", "title");
  const clicktest =()=> console.log('clisk test work')
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={2} style={styles.text} onPress={clickme} >lorema</Text>
    <Button title={'click'} color='red' onPress={title}/>
    <Button title={'click test'} color='red' onPress={clicktest}/>

    <TouchableWithoutFeedback onPress={clicktest}>
    <Image blurRadius={2} source={{
      width:300,
      height:150,
      uri:"https://images.wallpaperscraft.ru/image/single/bashnia_zdaniia_steklo_269740_1920x1080.jpg"
    }}/>
</TouchableWithoutFeedback>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  text: {
    color:'red'
  }
});
