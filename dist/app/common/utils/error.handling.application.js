"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandlingApp = void 0;
const menu_machine_1 = require("../constants/menu.machine");
class ErrorHandlingApp {
    constructor(msn) {
        this.msn = msn;
    }
    productSelection() {
        let message = this.msn.showMessage(menu_machine_1.MenuMachine.PRODUCT_NOT_REGISTRED);
        throw new Error(message);
    }
    productAmount() {
        let message = this.msn.showMessage(menu_machine_1.MenuMachine.INSUFFICIENTE_AMOUNT);
        throw new Error(message);
    }
    productMoney() {
        let message = this.msn.showMessage(menu_machine_1.MenuMachine.INSUFFICIENT_BACKGROUND);
        throw new Error(message);
    }
}
exports.ErrorHandlingApp = ErrorHandlingApp;
