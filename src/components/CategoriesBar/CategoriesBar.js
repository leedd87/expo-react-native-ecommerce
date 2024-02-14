import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
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

export const CategoriesBar = ({ filtrarPorCategoria }) => {

    const [fontsLoaded] = useFonts({
        Roboto_700Bold,
        Roboto_400Regular,
    });

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <View style={{ flexDirection: 'row', marginTop: 10, }}>
            <Pressable style={styles.categoryStyle} onPress={() => filtrarPorCategoria('Flor')}>
                <Text style={[styles.categoryTextStyle]}>Flor</Text>
            </Pressable>
            <Pressable style={styles.categoryStyle} onPress={() => filtrarPorCategoria('Suculenta')}>
                <Text style={[styles.categoryTextStyle]}>Suculenta</Text>
            </Pressable>
            <Pressable style={styles.categoryStyle} onPress={() => filtrarPorCategoria('Follaje')}>
                <Text style={[styles.categoryTextStyle]}>Follaje</Text>
            </Pressable>
            <Pressable style={styles.categoryStyle} onPress={() => filtrarPorCategoria('Hierba')}>
                <Text style={[styles.categoryTextStyle,]}>Hierba</Text>
            </Pressable>
            <Pressable style={styles.categoryStyle} onPress={() => filtrarPorCategoria('Árbol')}>
                <Text style={[styles.categoryTextStyle,]}>Árbol</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({

    categoryStyle: {
        backgroundColor: 'white',
        width: 100,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        borderColor: 'black',
        borderWidth: 1,
        marginHorizontal: 5,

    },
    categoryTextStyle: {
        fontSize: 18,

        color: 'black',
        fontFamily: 'Roboto_700Bold'

    }
});