import { View } from "react-native-web"
import { StyleSheet, Text } from "react-native"
import Jogada from "./Jogada"
const Rodape = ({jogadas, voltarJogada}) => {
    return (
        <View style={styles.rodape}>
            <Text>Histórico de jogadas:</Text>
            <Text style={styles.text}>{jogadas.map(
                (jog, idJogada) => <Jogada style={styles.jogada} jogada={jog} voltarJogada={() => voltarJogada(idJogada)} />
            )}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
     rodape: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#4e4d4dff",
    width: '100%',
    padding: 10,


  },
  jogada:{
   margin: 10 
  }
})

export default Rodape