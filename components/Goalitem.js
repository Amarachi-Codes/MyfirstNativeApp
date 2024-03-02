import { StyleSheet, View, Text, Pressable} from "react-native";
const Goalitem = (props) => {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}> 
    <View style={styles.goal}>
  <Text style={styles.goalText}>{props.text}</Text>
  </View>
  </Pressable>
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
