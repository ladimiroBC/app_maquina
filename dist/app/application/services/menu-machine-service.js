"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuMachineService = void 0;
const scanf_1 = __importDefault(require("scanf"));
class MenuMachineService {
    constructor() {
        this.selection = "";
        this.products = [];
    }
    verProductos() {
        this.mostrarProducto();
    }
    seleccionarProducto() {
        this.busquedaProducto();
    }
    ingresarBillete() {
        this.compraProducto();
    }
    creacionProducto(products) {
        this.products.push(products);
    }
    mostrarProducto() {
        this.products.forEach((p) => console.log(p));
    }
    busquedaProducto() {
        let flag = true;
        console.log("Ingresa el nombre de un producto");
        let query = (this.selection = (0, scanf_1.default)("%s"));
        let find = this.products.some((p) => {
            return p.name == query;
        });
        while (flag) {
            if (find) {
                this.selectProduct = this.products.filter((p) => {
                    return p.name == query;
                });
            }
            else {
                console.log("El producto ingresado no se encuentra registrado");
                console.log("Ingresa nuevamente el nombre de un producto");
                query = this.selection = (0, scanf_1.default)("%s");
                find = this.products.some((p) => {
                    return p.name == query;
                });
            }
        }
    }
    compraProducto() {
        if (this.selection.length > 0) {
            console.log("Ingrese el billete para la compra");
            let dinero = (this.money = (0, scanf_1.default)("%d"));
            this.accesoProducto = this.selectProduct[0];
            let bandera = true;
            while (bandera) {
                this.cantidadProducto();
                let total = this.accesoProducto.price * this.amount;
                if (total <= dinero) {
                    let devolucion = dinero - this.accesoProducto.price;
                    console.log("***Venta Existosa***");
                    console.log(`Producto ${this.accesoProducto.name} vendido`);
                    console.log(`Cantidad vendida ${this.amount}`);
                    console.log(`Devolución ${devolucion}`);
                    bandera = false;
                }
                else {
                    console.log("Insuficiente fondo para obtener el producto");
                    console.log("Ingresa nuevamente el billete para la compra");
                    dinero = this.money = (0, scanf_1.default)("%d");
                }
            }
        }
        else {
            console.log("No ha seleccionado ningun producto todavia");
        }
    }
    cantidadProducto() {
        console.log("Ingrese la cantidad deseada");
        this.amount = (0, scanf_1.default)("%d");
        const verficarCantidad = this.accesoProducto.amount >= this.amount;
        let bandera = true;
        while (bandera) {
            if (verficarCantidad) {
                let newAmount = this.accesoProducto.amount - this.amount;
                this.accesoProducto.amount = newAmount;
                bandera = false;
            }
            else {
                console.log("No tenemos la cantidad del producto solicitado");
                console.log("Ingrese nuevamente la cantidad deseada");
                this.amount = (0, scanf_1.default)("%d");
            }
        }
    }
}
exports.MenuMachineService = MenuMachineService;
