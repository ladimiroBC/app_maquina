import { IProduct } from "./domain/entitys/product-interface";
import { MenuMachine } from "./domain/interface/menu-machine-interface";

export class Application {
  private menu:MenuMachine;

  constructor(menu:MenuMachine){
    this.menu = menu;
  }

  cargarProducto(product:IProduct) { 
    this.menu.creacionProducto(product);  
  }

  verProducto() {
    this.menu.mostrarProducto();
  }

  seleccionarProducto() {
    this.menu.busquedaProducto();
  }

  ingresarBillete() {
    this.menu.compraProducto();
  }
}
