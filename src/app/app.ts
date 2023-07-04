import { IProduct } from './domain/entitys/product-interface';
import scanf from "scanf";
import { IConsoleApplication } from "./domain/interface/console-application-interface";
import { IMenuMachine } from "./domain/interface/menu-machine-interface";
import { MenuMachineService } from './application/services/menu-machine-service';

export class Application {
  private machine: MenuMachineService;
  private menu: IConsoleApplication;

  constructor(machine: MenuMachineService, menu: IConsoleApplication) {
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
      case 5:
        let producto = this.menu.FormularioProducto();
        this.machine.crearProducto(producto);
        break;  
      default:
        console.log("Lo sentimos, opcion no disponible :(");
    }
  }
}
