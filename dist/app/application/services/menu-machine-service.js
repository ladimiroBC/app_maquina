"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuMachineService = void 0;
const products_json_1 = __importDefault(require("../../../assets/data/products.json"));
const menu_machine_text_1 = require("../../common/constants/menu_machine-text");
const console_app_text_1 = require("../../common/constants/console-app-text");
class MenuMachineService {
    constructor(msn) {
        this.msn = msn;
        this.amount = 0;
        this.selection = "";
        this.products = [];
        this.selectProduct = [];
    }
    createProduct(product) {
        this.products.push(product);
    }
    getMoney(money) {
        let flag = true;
        while (flag) {
            let total = this.accesProduct.price * this.amount;
            if (total < money) {
                let change = money - this.accesProduct.price;
                this.msn.showMessage(menu_machine_text_1.MenuMachineText.SALE);
                console.log(`Product ${this.accesProduct.name} sold`);
                console.log(`Amount sold ${this.amount}`);
                console.log(`Change ${change}`);
                flag = false;
            }
            else {
                this.msn.showMessage(menu_machine_text_1.MenuMachineText.INSUFFICIENT_BACKGROUND);
                flag = false;
            }
        }
    }
    selectionProduct(nameProduct) {
        this.products = products_json_1.default.products;
        this.selection = nameProduct;
        let find = this.products.some((product) => {
            return product.name == this.selection;
        });
        let flag = true;
        let flag2 = "";
        while (flag) {
            if (find) {
                this.selectProduct = this.products.filter((product) => {
                    return product.name == this.selection;
                });
                this.accesProduct = this.selectProduct[0];
                this.msn.showMessage(menu_machine_text_1.MenuMachineText.PRODUCT);
                console.log(this.selection);
                flag = false;
                return (flag2 = "si");
            }
            else {
                this.msn.showMessage(menu_machine_text_1.MenuMachineText.PRODUCT_NOT_REGISTRED);
                flag = false;
            }
        }
    }
    showProducts() {
        this.products = products_json_1.default.products;
        return this.products;
    }
    amountProduct(productAmount) {
        this.amount = productAmount;
        let verifyAmount = this.accesProduct.amount >= this.amount;
        let flag = true;
        let flag2 = "";
        while (flag) {
            if (verifyAmount) {
                let newAmount = this.accesProduct.amount - this.amount;
                this.accesProduct.amount = newAmount;
                flag = false;
                return (flag2 = "si");
            }
            else {
                this.msn.showMessage(menu_machine_text_1.MenuMachineText.INSUFFICIENTE_AMOUNT);
                flag = false;
            }
        }
    }
    exit() {
        this.msn.showMessage(console_app_text_1.ConsoleText.EXIT_APP);
    }
}
exports.MenuMachineService = MenuMachineService;
//# sourceMappingURL=menu-machine-service.js.map