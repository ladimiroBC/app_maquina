import scanf from "scanf";
import { IConsoleApplication } from "../../domain/interface/console-application-interface";

export class ConsoleApplication implements IConsoleApplication {
  IngresarNombreProducto(): string {
    let name: string;
    console.log("Ingresa el nombre del producto");
    return name = scanf("%s");
  }

  IngresarDineroCompra(): number {
    let money: number;
    console.log("Ingresa el dinero de la compra");
    return money = scanf("%d");
  }
  
  IngresarCantidadProducto(): number {
    let amount: number;
    console.log("Ingresa la cantidad a comprar del producto");
    return amount = scanf("%d");
  }
}
