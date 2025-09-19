import { View } from "react-native-web"
import Celula from "./Celula"
const AreaJogo = () => {
    return (
        <View style={styles.areaJogo}>
        <View style={styles.celula}>
          <Text>teste</Text>
        </View>
      </View>
    )
}


const styles = StyleSheet.create({
    celula: {
    backgroundColor: "#c0c0c0ff",
  },
  areaJogo : {
    flex: 0.6,
    borderColor: '#666060ff',
    borderStyle:'solid',
    alignItems: 'center',
    justifyContent: 'center',
    

  },
  })

export default AreaJogo