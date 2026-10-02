import Vehiculo from "./vehiculo.js"
import Cliente from "./cliente.js"
import Alquiler from "./alquiler.js"

let carro = new Vehiculo("XYZ123", "Toyota", "2024")
let moto = new Vehiculo("ABC45F", "Yamaha", "2023")

let clienteMaria = new Cliente("María", "Gómez", "1029384756")

let alquiler1 = new Alquiler(clienteMaria, "02/10/2026", "10/10/2026")
alquiler1.registrarVehiculo(carro)
alquiler1.registrarVehiculo(moto)

alquiler1.verAlquiler()