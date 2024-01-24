import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'blue' }}>Hola Coder! y mas</Text>
      <TouchableOpacity onPress={() => console.log('PRESS IT')} style={{ backgroundColor: 'red' }}>
        <Text>TOUCH ME!</Text>

      </TouchableOpacity>
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
