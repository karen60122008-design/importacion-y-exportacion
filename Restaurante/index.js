import Plato from "./plato.js";
import Cliente from "./cliente.js";
import Pedido from "./pedido.js";

let plato1 = new Plato("Costillas San Luis", "Plato fuerte", 30000, true)
let plato2 = new Plato("Limonada Cerezada", "Bebida", 8000, true)

let cliente1 = new Cliente("Cristian", "9686794", "3456859363")
cliente1.verInfo()

let pedido1 = new Pedido("10/08/2026", 24, cliente1)
pedido1.agregarPlato(plato1)
pedido1.agregarPlato(plato2)

pedido1.verPedido()