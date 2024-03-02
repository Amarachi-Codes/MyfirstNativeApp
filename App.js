import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  FlatList,
} from 'react-native';

import Goalitem from './components/Goalitem';
import Goalinput from './components/Goalinput';

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([])


const addGoalHandler = (enteredGoalText)=>{
setCourseGoals(currentCourseGoals => [
  ...currentCourseGoals, 
  {text: enteredGoalText, id: Math.random().toString()},
]);
}

  return (
    <View style={styles.container}>
      <Goalinput onAddGoal={addGoalHandler }/>
      <View style={styles.goalsContainer}>
      <FlatList 
      data={courseGoals} 
      renderItem={(itemData) => {
       
return <Goalitem text={itemData.item.text} />;
      }}
      keyExtractor={(item, index)=>{
          return item.id;
      }}
       alwaysBounceVertical={false}
       />
        
       
      
     
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
  
  goalsContainer:{
    flex:4,
  },
  

  
});
