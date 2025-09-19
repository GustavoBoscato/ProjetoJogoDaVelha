import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.tudo}>
      <View style={styles.cabecalho}>
        <Text>Jogo da Velha</Text>
        <Text>Vez do Jogador:</Text>
      </View>
      <View style={styles.celula}>

      </View>
      <View style={styles.rodape}>
        <Text>Histórico de jogadas:</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tudo: {
    flex: 1,
    backgroundColor: '#d8d4d4ff',
    
  },

  cabecalho: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: "#4e4d4dff"
  },
  celula: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#c0c0c0ff"
  },
  rodape: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#4e4d4dff"
    
  },
});
