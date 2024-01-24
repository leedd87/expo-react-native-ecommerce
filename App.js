import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'blue' }}>Hola Coder! y mas</Text>
      <TouchableOpacity onPress={() => console.log('PRESS IT')} style={{ backgroundColor: 'red' }}>
        <Text>TOUCH ME!</Text>
      </TouchableOpacity>
      <View style={{ justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'black', borderRadius: 30 }}>
        <Text>Produdct 1</Text>
        <Text>Produdct 2</Text>
        <Text>Produdct 3</Text>
        <Text>Produdct 4</Text>
        <Text>Produdct 5</Text>
        <Text>Produdct 6</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
