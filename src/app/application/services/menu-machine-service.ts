import { IMenuMachine } from "../../domain/interface/menu-machine-interface";

export class MenuMachineService implements IMenuMachine {
  private menu: IMenuMachine;

  constructor(menu: IMenuMachine) {
    this.menu = menu;
  }

  verProductos(): void {
    this.menu.verProductos();
  }
  seleccionarProducto(): void {
    this.menu.seleccionarProducto();
  }
  ingresarBillete(): void {
    this.menu.ingresarBillete();
  }
  salir(): string {
    return this.menu.salir();
  }
}
