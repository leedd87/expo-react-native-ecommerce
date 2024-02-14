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
import dataPlantas from './src/data/data.json'
import { CategoriesBar } from './src/components/CategoriesBar';
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from '@expo-google-fonts/roboto';

export default function App() {
  const dataPlantasArray = dataPlantas.dataPlantas
  const [planta, setPlanta] = useState('');
  const [plantaArray, setPlantaArray] = useState(dataPlantasArray);
  const [error, setError] = useState('');
  const [categoriaFiltrada, setCategoriaFiltrada] = useState(null);
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

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

  const filtrarPorCategoria = (categoria) => {
    if (categoria === categoriaFiltrada) {
      setCategoriaFiltrada(null);
    } else {
      setCategoriaFiltrada(categoria);
    }
  };

  const dataFiltrada = categoriaFiltrada
    ? plantaArray.filter((planta) => planta.categoria === categoriaFiltrada)
    : plantaArray;




  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.content}>

        <SearchBar planta={planta} setPlanta={setPlanta} plantaArray={plantaArray} setPlantaArray={setPlantaArray} error={error} setError={setError} />
        <CategoriesBar filtrarPorCategoria={filtrarPorCategoria} />
        <FlatList
          data={dataFiltrada}
          renderItem={({ item, index }) => (
            <View style={styles.listContainer}>
              <Text
                style={[
                  styles.textStyle,
                  {
                    textDecorationLine: item.crossedOut ? 'line-through' : 'none', color: item.crossedOut ? 'gray' : 'black',

                  }
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
    fontFamily: 'Roboto_400Regular'
  },
  iconStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },

});