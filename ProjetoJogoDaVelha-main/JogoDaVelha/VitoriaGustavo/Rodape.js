import { View } from "react-native-web"
import { StyleSheet, Text } from "react-native"
import Jogada from "./Jogada"
const Rodape = ({jogadas, voltarJogada}) => {
    return (
        <View style={styles.rodape}>
            <Text>Histórico de jogadas:</Text>
            {jogadas.map(
                (jog, idJogada) => <Jogada jogada={jog} voltarJogada={() => voltarJogada(idJogada)} />
            )}
        </View>
    )
}


const styles = StyleSheet.create({
     rodape: {
    flex: 0.2,
    justifyContent: 'center',
    backgroundColor: "#4e4d4dff",
    width: '100%',
    padding: 10,


  }
})

export default Rodape