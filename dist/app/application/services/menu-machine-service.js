"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuMachineService = void 0;
class MenuMachineService {
    constructor(menu) {
        this.menu = menu;
    }
    crearProducto(producto) {
        this.menu.crearProducto(producto);
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
//# sourceMappingURL=menu-machine-service.js.map