import scanf from "scanf";
import { IConsoleApplication } from "../../domain/interface/console-application-interface";
import { ConsoleText } from "../../common/constants/console-app-text";
import { IMessagesApp } from "../../domain/interface/messages-application-interface";
import { IMenuView } from "../../domain/interface/menu-view-interface";

export class ConsoleApplication implements IConsoleApplication {
  
  constructor(private msn:IMessagesApp, private menu:IMenuView){}

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
