import React, { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  StatusBar,
} from 'react-native';
import { SearchBar } from './src/components';


export default function App() {
  const [planta, setPlanta] = useState('');
  const [plantaArray, setPlantaArray] = useState([]);
  const [error, setError] = useState('');

  const toggleCrossedOut = (index) => {
    const updatedPlants = plantaArray.map((plant, i) => {
      if (i === index) {
        return { ...plant, crossedOut: !plant.crossedOut };
      } else {
        return plant;
      }
    });
    setPlantaArray(updatedPlants);
  };

  const removePlant = (index) => {
    const updatedPlants = plantaArray.filter((_, i) => i !== index);
    setPlantaArray(updatedPlants);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.content}>

        <SearchBar planta={planta} setPlanta={setPlanta} plantaArray={plantaArray} setPlantaArray={setPlantaArray} error={error} setError={setError} />
        <FlatList
          data={plantaArray}
          renderItem={({ item, index }) => (
            <View style={styles.listContainer}>
              <Text
                style={[
                  styles.textStyle,
                  { textDecorationLine: item.crossedOut ? 'line-through' : 'none', color: item.crossedOut ? 'gray' : 'black' }
                ]}
              >
                {item.name}
              </Text>
              <Pressable
                style={[styles.pressableStyle, { marginRight: 10 }]}
                onPress={() => toggleCrossedOut(index)}
              >
                <Text style={[styles.iconStyle, { color: 'green' }]}>O</Text>
              </Pressable>
              <Pressable
                style={styles.pressableStyle}
                onPress={() => removePlant(index)}
              >
                <Text style={[styles.iconStyle, { color: 'red' }]}>X</Text>
              </Pressable>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
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
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
  },
  textInput: {
    width: 200,
    height: 50,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  pressableStyle: {
    backgroundColor: 'white',
    borderRadius: 3,
    borderColor: 'black',
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 18,
    marginRight: 15,
    width: 100,
  },
  iconStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});