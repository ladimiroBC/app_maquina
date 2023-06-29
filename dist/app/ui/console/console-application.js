"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleApplication = void 0;
const scanf_1 = __importDefault(require("scanf"));
class ConsoleApplication {
    IngresarNombreProducto() {
        let name;
        console.log("Ingresa el nombre del producto");
        return name = (0, scanf_1.default)("%s");
    }
    IngresarDineroCompra() {
        let money;
        console.log("Ingresa el dinero de la compra");
        return money = (0, scanf_1.default)("%d");
    }
    IngresarCantidadProducto() {
        let amount;
        console.log("Ingresa la cantidad a comprar del producto");
        return amount = (0, scanf_1.default)("%d");
    }
}
exports.ConsoleApplication = ConsoleApplication;
