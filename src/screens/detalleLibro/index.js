import React from 'react';
import {
    SafeAreaView, 
    Text, 
    View,
    Button
} from 'react-native';

import styles from './styles.js';
import { useSelector, useDispatch } from 'react-redux';
import { agregarAFavoritos } from '../../store/actions/libro.action';

const DetalleLibro = () => {
    const dispatch = useDispatch();
    const libro = useSelector(state => state.libros.selected);
    console.log(libro);
    const handleAgregarFavoritos = () => dispatch(agregarAFavoritos(libro.id));

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text>{libro.titulo}</Text>
                <Text>{libro.genero}</Text>
                <Button title="Agregar a favoritos" onPress={() => handleAgregarFavoritos()} />
            </View>
        </SafeAreaView>
    );
};

export default DetalleLibro;