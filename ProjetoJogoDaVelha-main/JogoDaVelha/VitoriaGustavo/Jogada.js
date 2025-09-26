import { View } from "react-native-web"
import { Pressable, StyleSheet } from "react-native"
export default function Jogada(props){
    const jogada = props.jogada
    return (
        <Pressable className="jogada" onPress={props.voltarJogada} style={styles.jogada}>

            {jogada[0] || '_'} | {jogada[1] || '_'} | {jogada[2] || '_'}
            {jogada[3] || '_'} | {jogada[4] || '_'} | {jogada[5] || '_'}
            {jogada[6] || '_'} | {jogada[7] || '_'} | {jogada[8] || '_'}
        
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
    
  }});