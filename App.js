import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is my First Native App</Text>
      <Text>Ethel-Doris Igwilo Software Engineer</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00828E',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
