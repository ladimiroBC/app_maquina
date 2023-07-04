"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const scanf_1 = __importDefault(require("scanf"));
class Application {
    constructor(machine, menu) {
        this.machine = machine;
        this.menu = menu;
    }
    myStartConsole() {
        this.menu.start();
        let instruccion = (0, scanf_1.default)("%d");
        switch (instruccion) {
            case 1:
                this.machine.verProductos();
                break;
            case 2:
                this.machine.seleccionarProducto();
                break;
            case 3:
                this.machine.ingresarBillete();
                break;
            case 4:
                this.machine.salir();
                break;
            case 5:
                let producto = this.menu.FormularioProducto();
                this.machine.crearProducto(producto);
                break;
            default:
                console.log("Lo sentimos, opcion no disponible :(");
        }
    }
}
exports.Application = Application;
//# sourceMappingURL=app.js.map