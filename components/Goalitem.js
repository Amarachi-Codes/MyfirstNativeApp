import { StyleSheet, View, Text} from "react-native";
const Goalitem = (props) => {
  return (
    <View style={styles.goal}>
  <Text style={styles.goalText}>{props.text}</Text>
  </View>
  )
}

export default Goalitem;

const styles = StyleSheet.create({
    goal:{
        margin:8,
        padding:8,
        borderRadius:6,
        backgroundColor:'#5E0B15',
        
      },
      goalText:{
        color:'#fff',
      }, 
})
