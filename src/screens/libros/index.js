import React, { useEffect } from 'react'
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Libro from '../../components/libro';
import { cargarLibros, selectLibro } from '../../store/actions/libro.action';

const Libros = ({navigation}) => {
    const dispatch = useDispatch();
    const libros = useSelector(state => state.libros.libros);

    useEffect(() => {
        dispatch(cargarLibros());
    }, []);

    const onSelectLibro = (id) => {
        dispatch(selectLibro(id));
        navigation.navigate('Detalle');
    }
    
    const renderItem = ({ item }) => (
        <Libro
            id={item.id}
            titulo={item.titulo}
            autor={item.autor}
            genero={item.genero}
            imagen={item.imagen}
            onSelect={onSelectLibro}
        />
    )

    return (
        <FlatList 
            data={libros}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}>
        </FlatList>
    )
}

export default Libros;