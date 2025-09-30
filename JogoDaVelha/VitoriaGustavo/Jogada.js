import { View, Text } from "react-native-web"
import { Pressable, StyleSheet } from "react-native"
export default function Jogada(props){
    const jogada = props.jogada
    return (
        <Pressable className="jogada" onPress={props.voltarJogada} style={styles.jogada}>

            <View style={styles.linha}><Text>{jogada[0] || '_'} | {jogada[1] || '_'} | {jogada[2] || '_'}</Text></View>
            <View style={styles.linha}><Text>{jogada[3] || '_'} | {jogada[4] || '_'} | {jogada[5] || '_'}</Text></View>
            <View style={styles.linha}><Text>{jogada[6] || '_'} | {jogada[7] || '_'} | {jogada[8] || '_'}</Text></View>
        
        </Pressable>
        
            
        
    )
}

const styles = StyleSheet.create({
 
  jogada: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    borderColor: '#666060ff',
    borderStyle:'solid',
    borderWidth: 2,
    
  },
  linha: {
    flexDirection: 'row'
  }
});