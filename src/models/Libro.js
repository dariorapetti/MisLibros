class Libro {
    constructor (id, idGenero, genero, titulo, autor, imagen, favorito = 0, prestado = 0){
        this.id = id.toString();
        this.idGenero = idGenero;
        this.genero = genero;
        this.titulo = titulo;
        this.autor = autor;
        this.imagen = imagen;
        this.favorito = favorito;
        this.prestado = prestado;
    }
}

export default Libro;