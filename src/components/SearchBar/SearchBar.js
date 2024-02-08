
import React from 'react'
import { StyleSheet, TextInput } from 'react-native';

export const SearchBar = ({ planta, setPlanta, plantaArray, setPlantaArray, error, setError }) => {
    const addPlant = () => {
        if (!isNaN(planta) && planta.trim() !== '') {
            setError('No puedes ingresar números');
        } else if (planta.trim() !== '') {
            setPlantaArray([...plantaArray, { name: planta, crossedOut: false }]);
            setPlanta('');
            setError('');
        } else {
            setError('Ingrese el nombre de la planta');
        }
    };


    return (

        <>
            <TextInput
                style={styles.textInput}
                placeholder="Agregar planta..."
                placeholderTextColor={'white'}
                value={planta}
                onChangeText={(text) => { setPlanta(text) }}
                onSubmitEditing={addPlant}
            />
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </>
    )
}

const styles = StyleSheet.create({

    textInput: {
        width: 200,
        height: 50,
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 8,
        fontSize: 16,
    },

});