
import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
const Cabecalho = ({ vezJogador }) => {
  return (
    <View style={styles.cabecalho}>
      <Text>Jogo da Velha</Text>
      <Text>Vez do Jogador:  {vezJogador}</Text>
    </View>
  )
}


const styles = StyleSheet.create({

  cabecalho: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#4e4d4dff",
    width: '100%'
  }
});

export default Cabecalho