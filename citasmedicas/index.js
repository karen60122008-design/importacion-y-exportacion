import Paciente from "./paciente.js";
import Medico from "./medico.js";
import Cita from "./cita.js";

let paciente1 = new Paciente("Alejandro", "12345678", 22, "3101234567")
paciente1.verInfo()

let medico1 = new Medico("Dra. Karen Ramirez", "87654321", "Medico general", "3207654321")
medico1.verInfo()

let cita1 = new Cita("1/10/2026", "9:30 AM", "Chequeo general", paciente1, medico1)
cita1.verCita()