"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuMachineService = void 0;
const products_json_1 = __importDefault(require("../../../assets/data/products.json"));
class MenuMachineService {
    constructor() {
        this.amount = 0;
        this.selection = "";
        this.products = [];
        this.selectProduct = [];
        this.purchasedProduct = [];
    }
    createProduct(product) {
        this.products.push(product);
    }
    getMoney(money) {
        let total = this.accesProduct.price * this.amount;
        let purchased;
        if (total < money) {
            let change = money - total;
            purchased = {
                productName: this.accesProduct.name,
                productAmount: this.amount,
                change: change
            };
            this.purchasedProduct.push(purchased);
        }
        return this.purchasedProduct;
    }
    selectionProduct(nameProduct) {
        this.products = products_json_1.default.products;
        this.selection = nameProduct;
        this.selectProduct = this.products.filter((product) => {
            return product.name === this.selection;
        });
        return this.selectProduct;
    }
    amountProduct(productAmount) {
        let flag = false;
        this.amount = productAmount;
        this.accesProduct = this.selectProduct[0];
        let verifyAmount = this.accesProduct.amount >= this.amount;
        if (verifyAmount) {
            let newAmount = this.accesProduct.amount - this.amount;
            this.accesProduct.amount = newAmount;
            flag = true;
        }
        return flag;
    }
    showProducts() {
        this.products = products_json_1.default.products;
        return this.products;
    }
    exit(instruction) {
        return instruction;
    }
}
exports.MenuMachineService = MenuMachineService;
