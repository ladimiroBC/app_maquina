import { IMenuMachine } from "./domain/interface/menu-machine-interface";


export class Application {
  private menu:IMenuMachine;

  constructor(menu:IMenuMachine){
    this.menu = menu
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
