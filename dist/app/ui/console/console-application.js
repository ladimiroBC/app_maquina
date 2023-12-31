"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleApplication = void 0;
const scanf_1 = __importDefault(require("scanf"));
const console_app_text_1 = require("../../common/constants/console-app-text");
class ConsoleApplication {
    constructor(msn) {
        this.msn = msn;
    }
    IngresarNombreProducto() {
        let name;
        this.msn.showMessage(console_app_text_1.ConsoleText.ingresaNombre);
        return name = (0, scanf_1.default)("%s");
    }
    IngresarDineroCompra() {
        let money;
        this.msn.showMessage(console_app_text_1.ConsoleText.ingresaDinero);
        return money = (0, scanf_1.default)("%d");
    }
    IngresarCantidadProducto() {
        let amount;
        this.msn.showMessage(console_app_text_1.ConsoleText.ingresaCantidad);
        return amount = (0, scanf_1.default)("%d");
    }
    salirMaquina() {
        let instruccion;
        this.msn.showMessage(console_app_text_1.ConsoleText.salirApp);
        return instruccion = (0, scanf_1.default)("%s");
    }
}
exports.ConsoleApplication = ConsoleApplication;
