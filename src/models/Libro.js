class Libro {
    constructor (id, idCategoria, titulo, autor, imagen, favorito = 0, prestado = 0){
        this.id = id.toString();
        this.idCategoria = idCategoria;
        this.titulo = titulo;
        this.autor = autor;
        this.imagen = imagen;
        this.favorito = favorito;
        this.prestado = prestado;
    }
}

export default Libro;