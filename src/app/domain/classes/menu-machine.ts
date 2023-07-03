import { IProduct } from "../entitys/product-interface";
import data from "../../../assets/data/productos.json";
import { IConsoleApplication } from "../interface/console-application-interface";
import { IMenuMachine } from "../interface/menu-machine-interface";
import { MenuMachineText } from "../../common/constants/menu_machine-text";
import { IMessagesApp } from "../interface/messages-application-interface";

export class MenuMachine implements IMenuMachine {
  private console: IConsoleApplication;
  private msn: IMessagesApp;
  selection: string = "";
  money: number;
  amount: number;
  products: IProduct[] = [];
  selectProduct: IProduct[];
  accesoProducto: IProduct;

  constructor(console: IConsoleApplication, msn: IMessagesApp) {
    this.console = console;
    this.msn = msn;
  }

  verProductos(): void {
    this.products = data.productos;
    this.products.forEach((producto, index) => {
      console.log(
        `${index + 1}. ${producto.name} precios--> ${producto.price} stock--> ${
          producto.amount
        }`
      );
    });
  }

  seleccionarProducto(): void {
    this.products = data.productos;
    this.selection = this.console.IngresarNombreProducto();
    let flag = true;
    let find = this.products.some((producto) => {
      return producto.name == this.selection;
    });

    while (flag) {
      if (find) {
        this.selectProduct = this.products.filter((producto) => {
          return producto.name == this.selection;
        });
        this.msn.showMessage(MenuMachineText.producto);
        console.log(this.selection);
        flag = false;
      } else {
        this.msn.showMessage(MenuMachineText.productoNoRegistrado);
        this.selection = this.console.IngresarNombreProducto();

        find = this.products.some((producto) => {
          return producto.name == this.selection;
        });
      }
    }
  }

  ingresarBillete(): void {
    if (this.selection.length > 0) {
      this.money = this.console.IngresarDineroCompra();
      this.accesoProducto = this.selectProduct[0];
      let flag = true;
      this.cantidadProducto();

      while (flag) {
        let total = this.accesoProducto.price * this.amount;

        if (total < this.money) {
          let devolucion = this.money - this.accesoProducto.price;

          this.msn.showMessage(MenuMachineText.venta);
          console.log(`Producto ${this.accesoProducto.name} vendido`);
          console.log(`Cantidad vendida ${this.amount}`);
          console.log(`Devolución ${devolucion}`);

          flag = false;
        } else {
          this.msn.showMessage(MenuMachineText.insufucienteFondo);
          this.money = this.console.IngresarDineroCompra();

          total = this.accesoProducto.price * this.amount;
        }
      }
    } else {
      this.msn.showMessage(MenuMachineText.compraCancelada);
    }
  }

  salir(): void {
    this.console.salirMaquina();
  }

  cantidadProducto(): void {
    this.amount = this.console.IngresarCantidadProducto();
    let verficarCantidad = this.accesoProducto.amount >= this.amount;
    let flag = true;

    while (flag) {
      if (verficarCantidad) {
        let newAmount = this.accesoProducto.amount - this.amount;
        this.accesoProducto.amount = newAmount;

        flag = false;
      } else {
        this.msn.showMessage(MenuMachineText.insuficienteCantidad);
        this.amount = this.console.IngresarCantidadProducto();

        verficarCantidad = this.accesoProducto.amount >= this.amount;
      }
    }
  }
}
