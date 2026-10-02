class Curso {
    nombre
    codigo
    duracion

    constructor(nombre, codigo, duracion) {
        this.nombre = nombre
        this.codigo = codigo
        this.duracion = duracion
    }

    verCurso() {
        console.log("Curso: " + this.nombre + " Código: " + this.codigo + " Duración: " + this.duracion)
    }
}

export default Curso