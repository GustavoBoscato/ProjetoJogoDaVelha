import { Button, View } from "react-native-web"
import { StyleSheet } from "react-native"
const Celula = ({valor, onClick}) => {
    return (
        <View style={styles.celula}>
            <Button title="Clique" onPress={onClick}></Button>
            {valor}
        </View>
    )
}


const styles = StyleSheet.create({


  celula:{
    backgroundColor: '#fff',
    alignItems: "center",
    borderStyle:'solid',
    borderWidth: 2,
    borderColor: '#000',
    height: 100,
    width: 100,
  }
  })

export default Celula