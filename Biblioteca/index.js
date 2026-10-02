import Libros from "./libros.js"
import Prestamo from "./prestamo.js"
import Usuarios from "./usuarios.js"

let quijote =new Libros("El Quijote", "Norma", "Miguel de Cervantes")
let maria =new Libros("La Maria", "Norma", "Jorge Isaacs") // Corrige nombre del autor

quijote.verLibro()
maria.verLibro()

let alexa = new Usuarios("Alexandra", "Muñoz", "111", "123")
alexa.verInfo()

let prestarQuijoteMaria = new Prestamo(alexa, "2/10/2026", "5/10/2026")
prestarQuijoteMaria.registrarLibros(quijote)
prestarQuijoteMaria.registrarLibros(maria)

prestarQuijoteMaria.verlibro()

