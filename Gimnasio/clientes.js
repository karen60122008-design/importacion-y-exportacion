// cliente.js
class Cliente {
    nombre
    apellido
    documento
    entrenador

    constructor(nombre, apellido, documento, entrenador) {
        this.nombre = nombre
        this.apellido = apellido
        this.documento = documento
        this.entrenador = entrenador
        this.rutinas = []
    }

    registrarRutina(rutina) {
        this.rutinas.push(rutina)
    }

    verInfo() {
        console.log("Cliente: " + this.nombre + " " + this.apellido + " Documento: " + this.documento)
        this.entrenador.verInfo()
        for (let i = 0; i < this.rutinas.length; i++) {
            this.rutinas[i].verRutina()
        }
    }
}

export default Cliente