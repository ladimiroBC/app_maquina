import scanf from "scanf";
import { IProduct } from "../../domain/entitys/product-interface";
import { MenuMachine } from "../../domain/interface/menu-machine-interface";


export class MenuMachineService implements MenuMachine{
  selection: string = "";
  money: number;
  amount: number;
  products: IProduct[] = [];
  selectProduct: IProduct[];
  accesoProducto: IProduct;
  
  verProductos(): void {
    this.mostrarProducto();
  }
  
  seleccionarProducto(): void {
    this.busquedaProducto();
  }
  
  ingresarBillete(): void {
    this.compraProducto();
  }
  
  creacionProducto(products: IProduct): void {
    this.products.push(products);
  }
  
  mostrarProducto(): void {
    this.products.forEach((p)=>console.log(p));
  }
  
  busquedaProducto(): void {
    let flag = true;
    console.log("Ingresa el nombre de un producto");
    let query = (this.selection = scanf("%s"));
    let find = this.products.some((p) => {
      return p.name == query;
    });

    while (flag) {
      if (find) {
        this.selectProduct = this.products.filter((p) => {
          return p.name == query;
        });
      } else {
        console.log("El producto ingresado no se encuentra registrado");
        console.log("Ingresa nuevamente el nombre de un producto");
        query = this.selection = scanf("%s");

        find = this.products.some((p) => {
          return p.name == query;
        });
      }
    }
  }
  
  compraProducto(): void {
    if (this.selection.length > 0) {
      console.log("Ingrese el billete para la compra");
      let dinero = (this.money = scanf("%d"));
      this.accesoProducto = this.selectProduct[0];
      let bandera = true;

      while (bandera) {
        this.cantidadProducto();
        let total = this.accesoProducto.price * this.amount;
        if (total <= dinero) {
          let devolucion = dinero - this.accesoProducto.price;

          console.log("***Venta Existosa***");
          console.log(`Producto ${this.accesoProducto.name} vendido`);
          console.log(`Cantidad vendida ${this.amount}`);
          console.log(`Devolución ${devolucion}`);

          bandera = false;
        } else {
          console.log("Insuficiente fondo para obtener el producto");
          console.log("Ingresa nuevamente el billete para la compra");

          dinero = this.money = scanf("%d");
        }
      }
    } else {
      console.log("No ha seleccionado ningun producto todavia");
    }
  }
  
  cantidadProducto(): void {
    console.log("Ingrese la cantidad deseada");
    this.amount = scanf("%d");
    const verficarCantidad = this.accesoProducto.amount >= this.amount;
    let bandera = true;

    while (bandera) {
      if (verficarCantidad) {
        let newAmount = this.accesoProducto.amount - this.amount;
        this.accesoProducto.amount = newAmount;

        bandera = false;
      } else {
        console.log("No tenemos la cantidad del producto solicitado");
        console.log("Ingrese nuevamente la cantidad deseada");

        this.amount = scanf("%d");
      }
    }
  }
}
