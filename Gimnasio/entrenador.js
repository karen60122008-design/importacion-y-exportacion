class Entrenador {
    nombre
    especialidad
    telefono

    constructor(nombre, especialidad, telefono) {
        this.nombre = nombre
        this.especialidad = especialidad
        this.telefono = telefono
    }

    verInfo() {
        console.log("Nombre entrenador: " + this.nombre + " especialidad: " + this.especialidad + " teléfono: " + this.telefono)
    }
}

export default Entrenador