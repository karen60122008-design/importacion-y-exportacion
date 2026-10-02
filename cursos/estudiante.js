class Estudiante {
    nombre
    apellido
    documento

    constructor(nombre, apellido, documento) {
        this.nombre = nombre
        this.apellido = apellido
        this.documento = documento
        this.cursos = []
    }

    matricularCurso(curso) {
        this.cursos.push(curso)
    }

    verInfo() {
        console.log("Estudiante: " + this.nombre + " " + this.apellido + " Documento: " + this.documento)
        for (let i = 0; i < this.cursos.length; i++) {
            this.cursos[i].verCurso()
        }
    }
}

export default Estudiante