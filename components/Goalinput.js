import { useState } from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const Goalinput = (props) => {
  const [enteredGoalText, setEnteredGoalText]= useState('');
 
  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText);
    }
    function addGoalHandler(){
      props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
    }

  return (
    <>
      
    <Text style={styles.textTitle}>TODO LIST</Text>
    <View style={styles.inputContainer}>
        <TextInput 
        style={styles.textInput} 
        placeholder='Your task goal' 
        onChangeText={goalInputHandler}
        value={enteredGoalText}
        />
        <Button title='Add Task' color={'#5E0B15'} onPress={addGoalHandler}/>
      </View>
      </>
  )
}

export default Goalinput;

const styles = StyleSheet.create({
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
  textTitle:{
    textAlign:'center',
    fontSize:24,
    fontWeight:'bold',
    color:'#5E0B15',
  },

})
