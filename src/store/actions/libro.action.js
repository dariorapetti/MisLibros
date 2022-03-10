import RNFS from 'react-native-fs';

export const AGREGAR_LIBRO = 'AGREGAR_LIBRO';
export const CARGAR_LIBRO = 'CARGAR_LIBRO';
export const SELECT_LIBRO = 'SELECT_LIBRO';
export const AGREGAR_FAVORITOS = 'AGREGAR_FAVORITOS';

import { fetchLibros, insertLibro, updateLibroFavoritos } from '../../db';

export const agregarLibro = (idGenero, titulo, autor, imagen) => {
    return async dispatch => {

        const filename = imagen.split('/').pop();
        const Path = `file:///${RNFS.DocumentDirectoryPath}/${filename}`;

        try {
            await RNFS.copyFile(imagen, Path);

            const result = await insertLibro(idGenero, titulo, autor, imagen);

            dispatch({
                type: AGREGAR_LIBRO,
                payload: {
                    id: result.insertId,
                    idGenero,
                    titulo,
                    autor,
                    image: Path
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export const cargarLibros = () => {
    return async dispatch => {
        try {
            const libros = await fetchLibros();
            dispatch({
                type: CARGAR_LIBRO,
                payload: libros
            });            
        } catch (error) {
            console.log(error);
        }
    }
}

export const selectLibro = (id) => ({
    type: SELECT_LIBRO,
    libroId: id
});

export const agregarAFavoritos = (id) => {
    return async dispatch => {

        try {
            const result = await updateLibroFavoritos(id);

            dispatch({
                type: AGREGAR_FAVORITOS,
                payload: {
                    id: id
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
}