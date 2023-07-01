"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuMachineService = void 0;
class MenuMachineService {
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
        this.menu.salir();
    }
}
exports.MenuMachineService = MenuMachineService;
