class Cliente {
    nombre
    apellido
    documento

    constructor(nombre, apellido, documento) {
        this.nombre = nombre
        this.apellido = apellido
        this.documento = documento
    }

    verInfo() {
        console.log("El cliente es " + this.nombre + " " + this.apellido + " documento: " + this.documento)
    }
}

export default Cliente