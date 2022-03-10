import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles.js';

const Libro = ({id, titulo, genero, autor, imagen, onSelect}) => {
    return (
        <TouchableOpacity onPress={() => onSelect(id)} style={styles.container}>
            <Image source={{uri: imagen}} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.title}>{titulo}</Text>
                <Text style={styles.address}>{genero}</Text>
                <Text style={styles.address}>{autor}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default Libro;
