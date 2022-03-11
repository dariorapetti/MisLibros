import Libro from "../../models/Libro";
import { AGREGAR_LIBRO, CARGAR_LIBRO, SELECT_LIBRO, AGREGAR_FAVORITOS } from "../actions/libro.action";

const initialState = {
    libros: [],
    selected: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case AGREGAR_LIBRO:
            const nuevoLibro = new Libro(
                action.payload.id, 
                action.payload.idGenero, 
                action.payload.titulo,
                action.payload.imagen
                );
            return {
                ...state,
                libros: state.libros.concat(nuevoLibro),
                selected: null
            }
        case CARGAR_LIBRO:
            return {
                ...state,
                libros: action.payload.map(libro => {
                    return new Libro(libro.id, libro.idGenero, libro.genero, libro.titulo, libro.autor, libro.imagen, libro.favorito, libro.prestado);
                }),
                selected: null
            }
        case SELECT_LIBRO:
            return {
                ...state,
                libros: [],
                selected: state.libros.find(libro => libro.id === action.libroId)
            }
        case AGREGAR_FAVORITOS:
                return {
                    ...state,
                    libros: [],
                    selected: action.id
                }
        default:
            return state;            
    }
}