import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import dataPlantas from './src/data/data.json'

export default function App() {

  console.log("🚀 ~ file: App.js:4 ~ plantasData:", dataPlantas)
  const [planta, setPlanta] = useState('')

  const [plantaArray, setPlantaArray] = useState([])


  const addPlant = () => {
    if (planta.trim() !== '') {
      setPlantaArray([...plantaArray, planta]);
      setPlanta('');
    };
  }

  useEffect(() => {
    console.log("🚀 ~ file: App.js:10 ~ planta:", planta)
    console.log("🚀 ~ file: App.js:12 ~ plantaArray:", plantaArray)
  }, [planta, plantaArray])


  return (
    <View style={styles.container}>


      <TextInput style={{
        width: 140,
        height: 50,
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 8,
        fontSize: 16,
      }}
        placeholder='Agregar planta'
        placeholderTextColor={'white'}
        value={planta}
        onChangeText={text => setPlanta(text)}
        onSubmitEditing={addPlant}
      />


      <Pressable onPress={() => console.log('HAZ ALGO')}>
        <Text>Press Me</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#456a27',
    alignItems: 'center',
    justifyContent: 'center',
  },

})
