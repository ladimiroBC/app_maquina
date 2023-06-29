"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuMachineService = void 0;
class MenuMachineService {
    constructor(operations) {
        this.operations = operations;
    }
    verProductos() {
        this.operations.cargarProducto();
    }
    seleccionarProducto() {
        this.operations.seleccionarProducto();
    }
    ingresarBillete() {
        this.operations.comprarProducto();
    }
    salir() {
        throw new Error("Method not implemented.");
    }
}
exports.MenuMachineService = MenuMachineService;
