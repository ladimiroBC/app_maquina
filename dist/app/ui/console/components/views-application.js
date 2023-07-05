"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewsApplication = void 0;
const scanf_1 = __importDefault(require("scanf"));
const console_app_text_1 = require("../../../common/constants/console-app-text");
class ViewsApplication {
    constructor(menuSVC, msn, menuView, form) {
        this.menuSVC = menuSVC;
        this.msn = msn;
        this.menuView = menuView;
        this.form = form;
    }
    viewCreateProduct() {
        let product = this.form.formularioProduct();
        this.menuSVC.createProduct(product);
    }
    viewShowProduct() {
        let products = this.menuSVC.showProducts();
        products.forEach((product, index) => {
            console.log(`${index + 1}. product--> ${product.name} price--> ${product.price} stock--> ${product.amount}`);
        });
    }
    viewSelectProduct() {
        let name;
        this.msn.showMessage(console_app_text_1.ConsoleText.ENTER_NAME);
        name = (0, scanf_1.default)("%s");
        this.menuSVC.selectionProduct(name);
    }
    viewGetMoney() {
        let name;
        this.msn.showMessage(console_app_text_1.ConsoleText.ENTER_NAME);
        name = (0, scanf_1.default)("%s");
        let flag = this.menuSVC.selectionProduct(name);
        if (flag == "si") {
            let amount;
            this.msn.showMessage(console_app_text_1.ConsoleText.ENTER_AMOUNT);
            amount = (0, scanf_1.default)("%d");
            let flag2 = this.menuSVC.amountProduct(amount);
            if (flag2 == "si") {
                let money;
                this.msn.showMessage(console_app_text_1.ConsoleText.ENTER_MONEY);
                money = (0, scanf_1.default)("%d");
                this.menuSVC.getMoney(money);
            }
        }
    }
    viewMenu() {
        this.menuView.printMenu();
    }
    viewExit() {
        this.menuSVC.exit();
    }
}
exports.ViewsApplication = ViewsApplication;
//# sourceMappingURL=views-application.js.map