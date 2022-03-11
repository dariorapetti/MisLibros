import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase('address.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS genero (id INTEGER PRIMARY KEY NOT NULL, nombre TEXT NOT NULL)', [], () => { resolve() }, (_, err) => { reject(err);});
            tx.executeSql('CREATE TABLE IF NOT EXISTS libro (id INTEGER PRIMARY KEY NOT NULL, idGenero INT NOT NULL, titulo TEXT NOT NULL, autor TEXT NOT NULL, imagen TEXT DEFAULT NULL, favorito TEXT DEFAULT NULL, prestado TEXT DEFAULT NULL, FOREIGN KEY (idGenero) REFERENCES genero (id) ON DELETE CASCADE ON UPDATE NO ACTION)', [], () => { resolve() }, (_, err) => { reject(err);});

            tx.executeSql("INSERT INTO genero (nombre) VALUES ('Ciencia ficción'), ('Cuento'), ('Drama'), ('Novela')", [], () => { resolve() }, (_, err) => { reject(err);});
        });
    });

    return promise;
}

export const insertLibro = (idGenero, titulo, autor, imagen) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('INSERT INTO libro (idGenero, titulo, autor, imagen) VALUES (?,?,?,?)', 
                [idGenero, titulo, autor, imagen], 
                (_, result) => { resolve(result) }, 
                (_, err) => { reject(err);}
            );
        });
    });

    return promise;
}

export const fetchLibros = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql("SELECT l.id, l.idGenero, g.nombre AS genero, l.titulo, l.autor, l.imagen, l.favorito, l.prestado FROM libro l INNER JOIN genero g ON l.idGenero = g.id", 
                [], 
                (_, result) => { 
                    let data = [];
                    var len = result.rows.length;
                    for (let i = 0; i< len; i++){
                        let row = result.rows.item(i);
                        data.push(row);
                    }
                    resolve(data);
                }, 
                (_, err) => { reject(err);}
            );
        });
    });

    return promise;
}

export const updateLibroFavoritos = (id) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('UPDATE libro SET favorito = 1 WHERE id = ?', 
                [id], 
                (_, result) => { resolve(result) }, 
                (_, err) => { reject(err);}
            );
        });
    });

    return promise;
}