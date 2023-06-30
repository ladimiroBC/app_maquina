import scanf from "scanf";
import { IConsoleApplication } from "../../domain/interface/console-application-interface";
import { MessagesApp } from "./messages-application";
import { ConsoleText } from "../../common/constants/console-app-text";

export class ConsoleApplication implements IConsoleApplication {
  
  constructor(private msn:MessagesApp){}

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

  salirMaquina(): string {
    let instruccion:string;
    this.msn.showMessage(ConsoleText.salirApp);
    return instruccion = scanf("%s");
  }
}
