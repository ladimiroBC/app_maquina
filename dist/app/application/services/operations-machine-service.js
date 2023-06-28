"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationsMachineService = void 0;
const productos_json_1 = __importDefault(require("../../../assets/data/productos.json"));
const scanf_1 = __importDefault(require("scanf"));
class OperationsMachineService {
    constructor() {
        this.selection = "";
        this.products = [];
    }
    cargarProducto() {
        this.products = productos_json_1.default.productos;
        this.products.forEach((p, i) => {
            console.log(`${i + 1}. ${p.name} precios--> ${p.price} stock--> ${p.amount}`);
        });
    }
    ingresarNombreProducto() {
        console.log("Ingresa el nombre del producto");
        this.selection = (0, scanf_1.default)("%s");
    }
    seleccionarProducto() {
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
                this.ingresarNombreProducto();
                find = this.products.some((p) => {
                    return p.name == this.selection;
                });
            }
        }
    }
    ingresarBillete() {
        console.log("Ingrese el billete para la compra");
        this.money = (0, scanf_1.default)("%d");
    }
    comprarProducto() {
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
                    this.ingresarBillete();
                    total = this.accesoProducto.price * this.amount;
                }
            }
        }
    }
    ingresarCantidad() {
        console.log("Ingrese la cantidad deseada");
        this.amount = (0, scanf_1.default)("%d");
    }
    cantidadProducto() {
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
                this.ingresarCantidad();
                verficarCantidad = this.accesoProducto.amount >= this.amount;
            }
        }
    }
}
exports.OperationsMachineService = OperationsMachineService;
