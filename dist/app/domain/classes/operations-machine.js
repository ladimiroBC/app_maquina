"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationsMachine = void 0;
const productos_json_1 = __importDefault(require("../../../assets/data/productos.json"));
class OperationsMachine {
    constructor(console) {
        this.products = [];
        this.console = console;
    }
    cargarProducto() {
        this.products = productos_json_1.default.productos;
        this.products.forEach((producto, index) => {
            console.log(`${index + 1}. ${producto.name} precios--> ${producto.price} stock--> ${producto.amount}`);
        });
    }
    seleccionarProducto() {
        this.selection = this.console.IngresarNombreProducto();
        let flag = true;
        let find = this.products.some((p) => {
            return p.name == this.selection;
        });
        while (flag) {
            if (find) {
                this.selectProduct = this.products.filter((p) => {
                    return p.name == this.selection;
                });
                console.log(`Producto seleccionado--> ${this.selection}`);
                flag = false;
            }
            else {
                console.log("El producto ingresado no se encuentra registrado");
                this.selection = this.console.IngresarNombreProducto();
                find = this.products.some((p) => {
                    return p.name == this.selection;
                });
            }
        }
    }
    comprarProducto() {
        this.money = this.console.IngresarDineroCompra();
        if (this.selection.length > 0) {
            this.accesoProducto = this.selectProduct[0];
            let flag = true;
            while (flag) {
                this.cantidadProducto();
                let total = this.accesoProducto.price * this.amount;
                if (total < this.money) {
                    let devolucion = this.money - this.accesoProducto.price;
                    console.log("***Venta Existosa***");
                    console.log(`Producto ${this.accesoProducto.name} vendido`);
                    console.log(`Cantidad vendida ${this.amount}`);
                    console.log(`Devolución ${devolucion}`);
                    flag = false;
                }
                else {
                    console.log("Insuficiente fondo para obtener el producto");
                    this.money = this.console.IngresarDineroCompra();
                    total = this.accesoProducto.price * this.amount;
                }
            }
        }
    }
    cantidadProducto() {
        this.amount = this.console.IngresarCantidadProducto();
        let verficarCantidad = this.accesoProducto.amount >= this.amount;
        let flag = true;
        while (flag) {
            if (verficarCantidad) {
                let newAmount = this.accesoProducto.amount - this.amount;
                this.accesoProducto.amount = newAmount;
                flag = false;
            }
            else {
                console.log("No tenemos la cantidad del producto solicitado");
                this.amount = this.console.IngresarCantidadProducto();
                verficarCantidad = this.accesoProducto.amount >= this.amount;
            }
        }
    }
}
exports.OperationsMachine = OperationsMachine;
