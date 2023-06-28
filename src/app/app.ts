import { MenuMachine } from "./domain/interface/menu-machine-interface";

export class Application {
  private menu:MenuMachine;

  constructor(menu:MenuMachine){
    this.menu = menu;
  }

  verProductos(){
    this.menu.verProductos();
  }

  seleccionarProducto(){
    this.menu.seleccionarProducto();
  }

  ingresarBillete(){
    this.menu.ingresarBillete();
  }

  salir():string{
    return this.menu.salir();
  }
}
