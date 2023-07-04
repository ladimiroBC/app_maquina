import scanf from "scanf";
import { IConsoleApplication } from "../../domain/interface/console-application-interface";
import { ConsoleText } from "../../common/constants/console-app-text";
import { IMessagesApp } from "../../domain/interface/messages-application-interface";
import { IMenuView } from "../../domain/interface/menu-view-interface";
import { IProduct } from "../../domain/entitys/product-interface";
import { FormProduct } from "../../common/constants/form-producto-text";

export class ConsoleApplication implements IConsoleApplication {
  private producto:IProduct = {
    name:"",
    price:0,
    amount:0
  };

  constructor(private msn:IMessagesApp, private menu:IMenuView){}
  
  FormularioProducto(): IProduct {
    this.msn.showFormProducto(FormProduct.IngresarNombre);
    let name = scanf("%s");
    this.producto.name = name;
    console.log(this.producto.name);
    this.msn.showFormProducto(FormProduct.IngresarPrecio);
    this.producto.price = scanf("%d");
    this.msn.showFormProducto(FormProduct.IngresarCantidad);
    this.producto.amount = scanf("%d");

    return this.producto;
  }

  IngresarNombreProducto(): string {
    let name: string;
    this.msn.showMessage(ConsoleText.ingresaNombre);
    return name = scanf("%s");
  }

  IngresarDineroCompra(): number {
    let money: number;
    this.msn.showMessage(ConsoleText.ingresaDinero);
    return money = scanf("%d");
  }
  
  IngresarCantidadProducto(): number {
    let amount: number;
    this.msn.showMessage(ConsoleText.ingresaCantidad);
    return amount = scanf("%d");
  }

  salirMaquina(): void {
    this.msn.showMessage(ConsoleText.salirApp);
  }

  start(){
    this.menu.imprimirMenu();
  }
}
