import { Pressable, View } from "react-native-web"
import { StyleSheet } from "react-native"
const Celula = ({valor, onClick}) => {
    return (
        <View style={styles.celula}>
            <Pressable style={styles.celula} onPress={onClick}>{valor}</Pressable>
            
        </View>
    )
}


const styles = StyleSheet.create({


  celula:{
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
    fontSize: 40,
    borderStyle:'solid',
    borderWidth: 2,
    borderColor: '#000',
    height: 100,
    width: 100,
  }
  })

export default Celula