"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuMachineService = void 0;
const scanf_1 = __importDefault(require("scanf"));
class MenuMachineService {
    constructor(operations) {
        this.operations = operations;
    }
    verProductos() {
        this.operations.cargarProducto();
    }
    seleccionarProducto() {
        this.operations.ingresarNombreProducto();
        this.operations.seleccionarProducto();
    }
    ingresarBillete() {
        this.operations.ingresarBillete();
        this.operations.ingresarCantidad();
        this.operations.comprarProducto();
    }
    salir() {
        console.log("Quiere seguir en nuestra aplicacion, digite 'si' para continuar, 'no' para salir");
        let instruccion = (0, scanf_1.default)("%s");
        return instruccion;
    }
}
exports.MenuMachineService = MenuMachineService;
