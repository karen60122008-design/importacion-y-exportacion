import Plato from "./plato.js";
import Cliente from "./cliente.js";
import Pedido from "./pedido.js";

let plato1 = new Plato("Costillas San Luis", "Plato fuerte", 30000, true)
let plato2 = new Plato("Limonada Cerezada", "Bebida", 8000, true)

let cliente1 = new Cliente("Karen", "3212345608", "111111")
cliente1.verInfo()

let pedido1 = new Pedido("02/9/2026", 101, cliente1)
pedido1.agregarPlato(plato1)
pedido1.agregarPlato(plato2)

pedido1.verPedido()