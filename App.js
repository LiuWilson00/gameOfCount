import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';

export default function App() {
  const [countNumber, setCountNumber] = useState(0)
  const lion = require('./src/img/lion2.png')
  const wolf = require('./src/img/wolf2.png')
  const dragon = require('./src/img/dragon2.png')
  const groupArr = [{ name: 'lion', color: "#27496d", image: lion }, { name: 'wolf', color: "orange", image: wolf }, { name: '3b6978', color: "#3b6978", image: dragon }]
  var [nowGroupNumber, setNowGroupNumber] = useState(0)
  var [nowGroup, setNowGroup] = useState(groupArr[nowGroupNumber])
  let [fontsLoaded] = useFonts({
    'GameOfThrones': require('./src/font/GameOfThrones.otf')
  })


  const changeGroup = () => {
    let tempNumber = nowGroupNumber + 1
    if (tempNumber < 0) tempNumber = tempNumber + 3
    tempNumber = tempNumber % 3
    setNowGroupNumber(tempNumber)
    setNowGroup(groupArr[tempNumber])

  }
  const addNumber = () => {
    setCountNumber(countNumber + 1)
  }
  const reduceNumber = () => {
    setCountNumber(countNumber - 1)
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  else {
    return (
      <View style={styles.container}>
        <Text style={[styles.title, { color: nowGroup.color }]}>Game Of Count</Text>
        <View style={styles.logoGroup}>
          <Image style={styles.logo} source={nowGroup.image}></Image>
          <Text style={styles.countText}>{countNumber}</Text>
        </View>
        <View style={styles.countBtnGroup}>
          <TouchableOpacity
            style={[styles.btnStyle, { backgroundColor: nowGroup.color, margin: 10 }]}
            onPress={() => { addNumber() }}
            color="#8ac6d1"
          >
            <Text style={{ color: '#fffdf9', fontFamily: "GameOfThrones" }}>
              ADD
          </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnStyle, { backgroundColor: nowGroup.color, margin: 10 }]}
            onPress={() => { reduceNumber() }}
            color="#8ac6d1"
          >
            <Text style={{ color: '#fffdf9', fontFamily: "GameOfThrones" }}>
              sub
          </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.btnStyle, { backgroundColor: nowGroup.color }]}
          onPress={() => { changeGroup() }}
          color="#8ac6d1"
        >
          <Text style={{ color: '#fffdf9' }}>
            切換陣營
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdf9',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  title: {
    fontFamily: "GameOfThrones",
    fontSize: 35
  },
  logo: {
    width: "100%",
    height: "100%",

  },
  logoGroup: {
    margin: 50,
    width: 300,
    height: 300
  },
  countText: {

    textAlign: "center",


  },
  btnStyle: {
    backgroundColor: '#ffe3ed',
    padding: 15,
    borderRadius: 5

  },
  countBtnGroup: {
    flexDirection: "row"
  }
});
