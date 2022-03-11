import React, { useState } from 'react'
import { View, Text, ScrollView, Button, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { agregarLibro } from '../../store/actions/libro.action';
import ImageSelector from '../../components/ImageSelector';
import styles from './styles.js';
import { COLORS } from '../../utils/constants/color';

const NuevoLibro = ({ navigation }) => {
    const dispatch = useDispatch();
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [imagen, setImagen] = useState('');

    const handleCambiarTitulo = (text) => setTitulo(text);
    const handleCambiarAutor = (text) => setAutor(text);

    const handleSave = () => {
        dispatch(agregarLibro(1, titulo, autor, imagen));
        navigation.navigate('Libros')
    }

    const handleOnImage = (uri) => {
        setImagen(uri);
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.label}>Título</Text>
                <TextInput 
                    style={styles.input} 
                    onChangeText={handleCambiarTitulo} 
                    value={titulo}
                    />
                <Text style={styles.label}>Autor</Text>
                <TextInput 
                    style={styles.input} 
                    onChangeText={handleCambiarAutor} 
                    value={autor}
                    />
                <ImageSelector onImage={handleOnImage} />
                <Button title="Guardar libro" color={COLORS.MAROON} onPress={() => handleSave()}></Button>
            </View>
        </ScrollView>
    )
}

export default NuevoLibro;
