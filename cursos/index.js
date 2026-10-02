import Curso from "./curso.js"
import Profesor from "./profesor.js"
import Estudiante from "./estudiante.js"

let cursoJS = new Curso("JavaScript Avanzado", "JS101", "40 horas")
let cursoSQL = new Curso("Bases de Datos MySQL", "BD202", "60 horas")

let profeZulma = new Profesor("Zulema", "Desarrollo de Software", "3123456789")

let estudianteLaura = new Estudiante("Laura", "Sánchez", "1087654321")
estudianteLaura.matricularCurso(cursoJS)
estudianteLaura.matricularCurso(cursoSQL)

estudianteLaura.verInfo()
profeZulma.verProfesor()