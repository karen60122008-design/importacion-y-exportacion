class Rutina {
    nombre
    objetivo
    duracion

    constructor(nombre, objetivo, duracion) {
        this.nombre = nombre
        this.objetivo = objetivo
        this.duracion = duracion
    }

    verRutina() {
        console.log("Nombre rutina: " + this.nombre + " objetivo: " + this.objetivo + " duración: " + this.duracion)
    }
}

export default Rutina