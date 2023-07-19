"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormCreateProduct = void 0;
const scanf_1 = __importDefault(require("scanf"));
const form_product_1 = require("../constants/form.product");
class FormCreateProduct {
    constructor(msn) {
        this.msn = msn;
        this.product = {
            name: "",
            price: 0,
            amount: 0,
        };
    }
    formularioProduct() {
        this.msn.showFormProducto(form_product_1.FormProduct.ENTER_NAME);
        this.product.name = (0, scanf_1.default)("%s");
        this.msn.showFormProducto(form_product_1.FormProduct.ENTER_PRICE);
        this.product.price = (0, scanf_1.default)("%d");
        this.msn.showFormProducto(form_product_1.FormProduct.ENTER_AMOUNT);
        this.product.amount = (0, scanf_1.default)("%d");
        return this.product;
    }
}
exports.FormCreateProduct = FormCreateProduct;
//# sourceMappingURL=form.create.product.js.map