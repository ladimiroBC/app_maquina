"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleApplication = void 0;
const scanf_1 = __importDefault(require("scanf"));
const console_app_text_1 = require("../../common/constants/console-app-text");
const form_producto_text_1 = require("../../common/constants/form-producto-text");
class ConsoleApplication {
    constructor(msn, menu) {
        this.msn = msn;
        this.menu = menu;
        this.producto = {
            name: "",
            price: 0,
            amount: 0
        };
    }
    FormularioProducto() {
        this.msn.showFormProducto(form_producto_text_1.FormProduct.IngresarNombre);
        let name = (0, scanf_1.default)("%s");
        this.producto.name = name;
        console.log(this.producto.name);
        this.msn.showFormProducto(form_producto_text_1.FormProduct.IngresarPrecio);
        this.producto.price = (0, scanf_1.default)("%d");
        this.msn.showFormProducto(form_producto_text_1.FormProduct.IngresarCantidad);
        this.producto.amount = (0, scanf_1.default)("%d");
        return this.producto;
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
        this.msn.showMessage(console_app_text_1.ConsoleText.salirApp);
    }
    start() {
        this.menu.imprimirMenu();
    }
}
exports.ConsoleApplication = ConsoleApplication;
//# sourceMappingURL=console-application.js.map