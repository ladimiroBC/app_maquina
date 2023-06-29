import { IProduct } from "../entitys/product-interface";
import { IOperationsMachine } from "../interface/operations-machine-interface";
import data from "../../../assets/data/productos.json";
import { IConsoleApplication } from "../interface/console-application-interface";

export class OperationsMachine implements IOperationsMachine {
  private console: IConsoleApplication;
  selection: string;
  money: number;
  amount: number;
  products: IProduct[] = [];
  selectProduct: IProduct[];
  accesoProducto: IProduct;

  constructor(console: IConsoleApplication) {
    this.console = console;
  }

  cargarProducto(): void {
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
    this.selection = this.console.IngresarNombreProducto();
    let flag = true;
    let find = this.products.some((p) => {
      return p.name == this.selection;
    });

    while (flag) {
      if (find) {
        this.selectProduct = this.products.filter((p) => {
          return p.name == this.selection;
        });
        console.log(`Producto seleccionado--> ${this.selection}`);
        flag = false;
      } else {
        console.log("El producto ingresado no se encuentra registrado");
        this.selection = this.console.IngresarNombreProducto();

        find = this.products.some((p) => {
          return p.name == this.selection;
        });
      }
    }
  }

  comprarProducto(): void {
    this.money = this.console.IngresarDineroCompra();
    if (this.selection.length > 0) {
      this.accesoProducto = this.selectProduct[0];
      let flag = true;

      while (flag) {
        this.cantidadProducto();
        let total = this.accesoProducto.price * this.amount;

        if (total < this.money) {
          let devolucion = this.money - this.accesoProducto.price;

          console.log("***Venta Existosa***");
          console.log(`Producto ${this.accesoProducto.name} vendido`);
          console.log(`Cantidad vendida ${this.amount}`);
          console.log(`Devolución ${devolucion}`);

          flag = false;
        } else {
          console.log("Insuficiente fondo para obtener el producto");
          this.money = this.console.IngresarDineroCompra();

          total = this.accesoProducto.price * this.amount;
        }
      }
    }
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
        console.log("No tenemos la cantidad del producto solicitado");
        this.amount = this.console.IngresarCantidadProducto();

        verficarCantidad = this.accesoProducto.amount >= this.amount;
      }
    }
  }
}
