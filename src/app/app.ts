import scanf from "scanf";
import { IConsoleApplication } from "./domain/interface/console-application-interface";
import { IMenuMachine } from "./domain/interface/menu-machine-interface";

export class Application {
  private machine: IMenuMachine;
  private menu: IConsoleApplication;

  constructor(machine: IMenuMachine, menu: IConsoleApplication) {
    this.machine = machine;
    this.menu = menu;
  }

  myStartConsole() {
    this.menu.start();
    let instruccion = scanf("%d");
    switch (instruccion) {
      case 1:
        this.machine.verProductos();
        break;
      case 2:
        this.machine.seleccionarProducto();
        break;
      case 3:
        this.machine.ingresarBillete();
        break;
      case 4:
        this.machine.salir();
        break;
      default:
        console.log("Lo sentimos, opcion no disponible :(");
    }
  }
}
