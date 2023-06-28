"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
class Application {
    constructor(menu) {
        this.menu = menu;
    }
    verProductos() {
        this.menu.verProductos();
    }
    seleccionarProducto() {
        this.menu.seleccionarProducto();
    }
    ingresarBillete() {
        this.menu.ingresarBillete();
    }
    salir() {
        return this.menu.salir();
    }
}
exports.Application = Application;
