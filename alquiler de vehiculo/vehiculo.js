class Vehiculo {
    placa
    marca
    modelo

    constructor(placa, marca, modelo) {
        this.placa = placa
        this.marca = marca
        this.modelo = modelo
    }

    verVehiculo() {
        console.log("Marca: " + this.marca + " modelo: " + this.modelo + " placa: " + this.placa)
    }
}

export default Vehiculo