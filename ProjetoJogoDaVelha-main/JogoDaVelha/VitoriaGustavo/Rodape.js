import { View } from "react-native-web"
import { StyleSheet, Text } from "react-native"
const Rodape = () => {
    return (
        <View style={styles.rodape}>
            <Text>Histórico de jogadas:</Text>
        </View>
    )
}


const styles = StyleSheet.create({
     rodape: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#4e4d4dff",
     borderColor: '#666060ff',
    borderStyle:'solid',
    borderWidth: 2,


  }
})

export default Rodape