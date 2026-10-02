import Entrenador from "./entrenador.js"
import Rutina from "./rutina.js"
import Cliente from "./clientes.js"

let entrenadorCarlos = new Entrenador("Carlos", "Hipertrofia", "3001234567")
let rutinaPierna = new Rutina("Pierna Pesada", "Fuerza", "60 min")
let rutinaCardio = new Rutina("Cardio Hiit", "Resistencia", "30 min")

let clienteKaren = new Cliente("Karen", "Ramírez", "1098765432", entrenadorCarlos)
clienteKaren.registrarRutina(rutinaPierna)
clienteKaren.registrarRutina(rutinaCardio)

clienteKaren.verInfo()