"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
class Application {
    constructor(menu) {
        this.menu = menu;
    }
    cargarProducto(product) {
        this.menu.creacionProducto(product);
    }
    verProducto() {
        this.menu.mostrarProducto();
    }
    seleccionarProducto() {
        this.menu.busquedaProducto();
    }
    ingresarBillete() {
        this.menu.compraProducto();
    }
}
exports.Application = Application;
