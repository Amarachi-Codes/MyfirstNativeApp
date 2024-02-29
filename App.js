import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText]= useState('');
  const [courseGoals, setCourseGoals] = useState([])

  function goalInputHandler(enteredText){
setEnteredGoalText(enteredText);
}
const addGoalHandler = ()=>{
setCourseGoals(currentCourseGoals => [
  ...currentCourseGoals, 
  enteredGoalText,
]);
}

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.textInput} 
        placeholder='Your task goal' 
        onChangeText={goalInputHandler}
        />
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal)=>
        <View key={goal} style={styles.goal}>
        <Text style={styles.goalText}>{goal}</Text>
        </View>
        )}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 50,
    paddingHorizontal: 16,
    marginTop: 40,
    height: '100%',
    backgroundColor: '#efefef'
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'


  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer:{
    flex:4,
  },
  goal:{
    margin:8,
    padding:8,
    borderRadius:6,
    backgroundColor:'#5E0B15',
    
  },
  goalText:{
    color:'#fff',
  }

  
});
