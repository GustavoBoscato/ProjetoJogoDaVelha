import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cabecalho from '../VitoriaGustavo/Cabecalho';
import AreaJogo from '../VitoriaGustavo/AreaJogo';
export default function App() {
  return (
    <View style={styles.tudo}>
      <Cabecalho/>
      <AreaJogo/>
      <Rodape/>
    </View>
  );
}

const styles = StyleSheet.create({
  tudo: {
    flex: 1,
    backgroundColor: '#d8d4d4ff',
    
  },


  
  
 
});
