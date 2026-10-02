class Profesor {
    nombre
    especialidad
    telefono

    constructor(nombre, especialidad, telefono) {
        this.nombre = nombre
        this.especialidad = especialidad
        this.telefono = telefono
    }

    verProfesor() {
        console.log("Profesor: " + this.nombre + " Especialidad: " + this.especialidad + " Teléfono: " + this.telefono)
    }
}

export default Profesor