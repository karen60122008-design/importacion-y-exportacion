class Alquiler {
    fechaInicio
    fechaDevolucion

    constructor(cliente, fechaInicio, fechaDevolucion) {
        this.cliente = cliente
        this.fechaInicio = fechaInicio
        this.fechaDevolucion = fechaDevolucion
        this.vehiculos = []
    }

    registrarVehiculo(vehiculo) {
        this.vehiculos.push(vehiculo)
    }

    verAlquiler() {
        this.cliente.verInfo()
        console.log("Fecha inicio: " + this.fechaInicio + " fecha devolución: " + this.fechaDevolucion)
        for (let i = 0; i < this.vehiculos.length; i++) {
            this.vehiculos[i].verVehiculo()
        }
    }
}

export default Alquiler