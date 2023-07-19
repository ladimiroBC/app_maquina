"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewsApplication = void 0;
const scanf_1 = __importDefault(require("scanf"));
const console_app_1 = require("../../../common/constants/console.app");
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
        let nameProduct;
        this.msn.showMessage(console_app_1.ConsoleApp.ENTER_NAME);
        nameProduct = (0, scanf_1.default)("%s");
        let product = this.menuSVC.selectionProduct(nameProduct);
        try {
            if (product.length == 0) {
                //let message = "";
                //message = this.msn.showMessage(MenuMachine.PRODUCT_NOT_REGISTRED);
                throw new Error("producto no encontrado");
            }
            else {
                console.log(product[0].name);
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    viewGetMoney() {
    }
    viewMenu() {
        this.menuView.printMenu();
    }
    viewExit() {
        this.menuSVC.exit();
    }
}
exports.ViewsApplication = ViewsApplication;
//# sourceMappingURL=view.application.js.map