import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button, Alert } from 'react-native';
import React from 'react';

export default function App() {

  const click =()=> console.log('clisk work!')
  const title =()=> Alert.alert("H1","p" ,[
    {text: "yes"},
    {text: "no"}
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={2} style={styles.text} onPress={click} >lorema</Text>
    <Button title={'click'}color='red' onPress={title}/>
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
