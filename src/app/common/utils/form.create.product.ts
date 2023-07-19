import scanf from "scanf";
import { Product } from "../../domain/entitys/product";
import { IFormCreateProduct } from "../../domain/interface/form.create.product.interface";
import { IMessagesApp } from "../../domain/interface/messages.application.interface";
import { FormProduct } from "../constants/form.product";

export class FormCreateProduct implements IFormCreateProduct {
  private product: Product = {
    name: "",
    price: 0,
    amount: 0,
  };

  constructor(private msn: IMessagesApp) { }

  formularioProduct(): Product {
    this.msn.showFormProducto(FormProduct.ENTER_NAME);
    this.product.name = scanf("%s");
    this.msn.showFormProducto(FormProduct.ENTER_PRICE);
    this.product.price = scanf("%d");
    this.msn.showFormProducto(FormProduct.ENTER_AMOUNT);
    this.product.amount = scanf("%d");

    return this.product;
  }
}
