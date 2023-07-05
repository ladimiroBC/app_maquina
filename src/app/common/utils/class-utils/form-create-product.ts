import scanf from "scanf";
import { IProduct } from "../../../domain/entitys/product-interface";
import { IFormCreateProduct } from "../interface-utils/form-create-product-interface";
import { IMessagesApp } from "../interface-utils/messages-application-interface";
import { FormProduct } from "../../constants/form-producto-text";

export class FormCreateProduct implements IFormCreateProduct{
  private product:IProduct = {
    name:"",
    price:0,
    amount:0
  };

  constructor(private msn:IMessagesApp){}
  
  formularioProduct(): IProduct {
    this.msn.showFormProducto(FormProduct.IngresarNombre);
    this.product.name = scanf("%s");
    this.msn.showFormProducto(FormProduct.IngresarPrecio);
    this.product.price = scanf("%d");
    this.msn.showFormProducto(FormProduct.IngresarCantidad);
    this.product.amount = scanf("%d");

    return this.product;
  }
}
