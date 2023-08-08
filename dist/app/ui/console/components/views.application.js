"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewsApplication = void 0;
const scanf_1 = __importDefault(require("scanf"));
const console_app_1 = require("../../../common/constants/console.app");
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
        try {
            let product = this.menuSVC.selectionProduct(nameProduct);
            console.log(`Product select--> ${product}`);
        }
        catch (error) {
            console.log(error);
        }
    }
    viewAmountProduct() {
        let productAmount;
        console.log(this.msn.showMessage(console_app_1.ConsoleApp.ENTER_AMOUNT));
        productAmount = (0, scanf_1.default)("%f");
        try {
            this.menuSVC.amountProduct(productAmount);
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
        try {
            let purchased = this.menuSVC.getMoney(money);
            console.log(`Product purchased--> ${purchased[0].productName}`);
            console.log(`Amount product--> ${purchased[0].productAmount}`);
            console.log(`Change--> ${purchased[0].change}`);
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
                flag = true;
                break;
            default:
                console.log("Sorry, option not available :(");
        }
        return flag;
    }
}
exports.ViewsApplication = ViewsApplication;
