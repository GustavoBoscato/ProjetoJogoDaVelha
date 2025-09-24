
import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
const Cabecalho = () => {
    return (
        <View style={styles.cabecalho}>
                <Text>Jogo da Velha</Text>
                <Text>Vez do Jogador:</Text>
              </View>
    )
}


const styles = StyleSheet.create({
 
  cabecalho: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: "#4e4d4dff",
     borderColor: '#666060ff',
    borderStyle:'solid',
    borderWidth: 2,
  }});

export default Cabecalho