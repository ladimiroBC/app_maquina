"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewsApplication = void 0;
const scanf_1 = __importDefault(require("scanf"));
const console_app_1 = require("../../../common/constants/console.app");
const menu_machine_1 = require("../../../common/constants/menu.machine");
const form_product_1 = require("../../../common/constants/form.product");
class ViewsApplication {
    constructor(menuSVC, msn, menuView) {
        this.menuSVC = menuSVC;
        this.msn = msn;
        this.menuView = menuView;
    }
    viewCreateProduct() {
        let product = {};
        this.msn.showFormProducto(form_product_1.FormProduct.ENTER_NAME);
        product.name = (0, scanf_1.default)("%s");
        this.msn.showFormProducto(form_product_1.FormProduct.ENTER_PRICE);
        product.price = (0, scanf_1.default)("%d");
        this.msn.showFormProducto(form_product_1.FormProduct.ENTER_AMOUNT);
        product.amount = (0, scanf_1.default)("%d");
        this.menuSVC.createProduct(product);
    }
    viewShowProduct() {
        let products = this.menuSVC.showProducts();
        products.forEach((product, index) => {
            console.log(`${index + 1}. product--> ${product.name} price--> ${product.price} stock--> ${product.amount}`);
        });
    }
    viewSelectProduct() {
        let nameProduct;
        console.log(this.msn.showMessage(console_app_1.ConsoleApp.ENTER_NAME));
        nameProduct = (0, scanf_1.default)("%s");
        let product = this.menuSVC.selectionProduct(nameProduct);
        try {
            if (product.length == 0) {
                let message = this.msn.showMessage(menu_machine_1.MenuMachine.PRODUCT_NOT_REGISTRED);
                throw new Error(message);
            }
            else {
                console.log(`Product select--> ${product[0].name}`);
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    viewAmountProduct() {
        let productAmount;
        console.log(this.msn.showMessage(console_app_1.ConsoleApp.ENTER_AMOUNT));
        productAmount = (0, scanf_1.default)("%f");
        let flag = this.menuSVC.amountProduct(productAmount);
        try {
            if (flag) {
                console.log(`Requested amount--> ${productAmount}`);
            }
            else {
                let message = this.msn.showMessage(menu_machine_1.MenuMachine.INSUFFICIENTE_AMOUNT);
                throw new Error(message);
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    viewGetMoney() {
        this.viewSelectProduct();
        this.viewAmountProduct();
        let money;
        console.log(this.msn.showMessage(console_app_1.ConsoleApp.ENTER_MONEY));
        money = (0, scanf_1.default)("%f");
        let purchased = this.menuSVC.getMoney(money);
        try {
            if (purchased.length == 0) {
                let message = this.msn.showMessage(menu_machine_1.MenuMachine.INSUFFICIENT_BACKGROUND);
                throw new Error(message);
            }
            else {
                console.log(this.msn.showMessage(menu_machine_1.MenuMachine.SALE));
                console.log(`Product purchased--> ${purchased[0].productName}`);
                console.log(`Amount product--> ${purchased[0].productAmount}`);
                console.log(`Change--> ${purchased[0].change}`);
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    viewMenu() {
        this.menuView.printMenu();
    }
    viewExit() {
        let flag = false;
        let instruction = "";
        console.log(this.msn.showMessage(console_app_1.ConsoleApp.DO_YOU_WANT_TO_GO_OUT));
        instruction = (0, scanf_1.default)("%s");
        let instructionExit = this.menuSVC.exit(instruction);
        switch (instructionExit) {
            case "yes":
                console.log(this.msn.showMessage(console_app_1.ConsoleApp.MESSAGE_EXIT));
                break;
            case "no":
                console.log(this.msn.showMessage(console_app_1.ConsoleApp.ACTION_TO_PERFORM));
                flag = true;
                break;
            default:
                console.log("Sorry, option not available :(");
        }
        return flag;
    }
}
exports.ViewsApplication = ViewsApplication;
