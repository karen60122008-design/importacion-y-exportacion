import Vehiculo from "./vehiculo.js";
import ClienteAlquiler from "./cliente.js";
import Alquiler from "./alquiler.js";

let carro1 = new Vehiculo("XOZ243", "Toyota", "2025", "SUV")
carro1.verVehiculo()

let cliente1 = new ClienteAlquiler("Karen Ramirez", "9876567890", "31590934804")
cliente1.verInfo()

let alquiler1 = new Alquiler("02/09/2026", "11/10/2026", cliente1, carro1)
alquiler1.verAlquiler()