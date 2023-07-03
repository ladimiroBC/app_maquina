"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuMachine = void 0;
const productos_json_1 = __importDefault(require("../../../assets/data/productos.json"));
const menu_machine_text_1 = require("../../common/constants/menu_machine-text");
class MenuMachine {
    constructor(console, msn) {
        this.selection = "";
        this.products = [];
        this.console = console;
        this.msn = msn;
    }
    verProductos() {
        this.products = productos_json_1.default.productos;
        this.products.forEach((producto, index) => {
            console.log(`${index + 1}. ${producto.name} precios--> ${producto.price} stock--> ${producto.amount}`);
        });
    }
    seleccionarProducto() {
        this.products = productos_json_1.default.productos;
        this.selection = this.console.IngresarNombreProducto();
        let flag = true;
        let find = this.products.some((producto) => {
            return producto.name == this.selection;
        });
        while (flag) {
            if (find) {
                this.selectProduct = this.products.filter((producto) => {
                    return producto.name == this.selection;
                });
                this.msn.showMessage(menu_machine_text_1.MenuMachineText.producto);
                console.log(this.selection);
                flag = false;
            }
            else {
                this.msn.showMessage(menu_machine_text_1.MenuMachineText.productoNoRegistrado);
                this.selection = this.console.IngresarNombreProducto();
                find = this.products.some((producto) => {
                    return producto.name == this.selection;
                });
            }
        }
    }
    ingresarBillete() {
        if (this.selection.length > 0) {
            this.money = this.console.IngresarDineroCompra();
            this.accesoProducto = this.selectProduct[0];
            let flag = true;
            this.cantidadProducto();
            while (flag) {
                let total = this.accesoProducto.price * this.amount;
                if (total < this.money) {
                    let devolucion = this.money - this.accesoProducto.price;
                    this.msn.showMessage(menu_machine_text_1.MenuMachineText.venta);
                    console.log(`Producto ${this.accesoProducto.name} vendido`);
                    console.log(`Cantidad vendida ${this.amount}`);
                    console.log(`Devolución ${devolucion}`);
                    flag = false;
                }
                else {
                    this.msn.showMessage(menu_machine_text_1.MenuMachineText.insufucienteFondo);
                    this.money = this.console.IngresarDineroCompra();
                    total = this.accesoProducto.price * this.amount;
                }
            }
        }
        else {
            this.msn.showMessage(menu_machine_text_1.MenuMachineText.compraCancelada);
        }
    }
    salir() {
        this.console.salirMaquina();
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
                this.msn.showMessage(menu_machine_text_1.MenuMachineText.insuficienteCantidad);
                this.amount = this.console.IngresarCantidadProducto();
                verficarCantidad = this.accesoProducto.amount >= this.amount;
            }
        }
    }
}
exports.MenuMachine = MenuMachine;
//# sourceMappingURL=menu-machine.js.map