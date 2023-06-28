import { IProduct } from "../../domain/entitys/product-interface";
import { OperationsMachine } from "../../domain/interface/operations-machine-interface";
import data from "../../../assets/data/productos.json";
import scanf from "scanf";

export class OperationsMachineService implements OperationsMachine{
  selection: string = "";
  money: number;
  amount: number;
  products: IProduct[] = [];
  selectProduct: IProduct[];
  accesoProducto: IProduct;
  
  cargarProducto(): void {
    this.products = data.productos;
    this.products.forEach((p,i)=>{
      console.log(`${i+1}. ${p.name} precios--> ${p.price} stock--> ${p.amount}`)
    })    
  }

  ingresarNombreProducto(): void {
    console.log("Ingresa el nombre del producto");
    this.selection = scanf("%s");
  }

  seleccionarProducto(): void {
    let flag = true;
    let find = this.products.some((p)=>{
      return p.name == this.selection;
    });

    while(flag){
      if(find){
        this.selectProduct = this.products.filter((p)=>{
          return p.name == this.selection;
        })
        console.log(`Producto seleccionado--> ${this.selection}`);
        flag = false;
      }else{
        console.log("El producto ingresado no se encuentra registrado");
        this.ingresarNombreProducto();

        find = this.products.some((p) => {
          return p.name == this.selection;
        });
      }
    }
  }

  ingresarBillete(): void {
    console.log("Ingrese el billete para la compra");
    this.money = scanf("%d");  
  }

  comprarProducto(): void {
    if(this.selection.length > 0){
      this.accesoProducto = this.selectProduct[0];
      let flag = true

      while(flag){
        this.cantidadProducto();
        let total = this.accesoProducto.price * this.amount;
        
        if(total < this.money){
          let devolucion = this.money - this.accesoProducto.price;

          console.log("***Venta Existosa***");
          console.log(`Producto ${this.accesoProducto.name} vendido`);
          console.log(`Cantidad vendida ${this.amount}`);
          console.log(`Devolución ${devolucion}`);

          flag = false;  
        }else{
          console.log("Insuficiente fondo para obtener el producto");
          this.ingresarBillete();

          total = this.accesoProducto.price * this.amount;
        }
      }
    }
  }

  ingresarCantidad(): void {
    console.log("Ingrese la cantidad deseada");
    this.amount = scanf("%d");
  }

  cantidadProducto(): void {
    let verficarCantidad = this.accesoProducto.amount >= this.amount;
    let flag = true;

    while(flag){
      if(verficarCantidad){
        let newAmount = this.accesoProducto.amount - this.amount;
        this.accesoProducto.amount = newAmount;

        flag = false;
      }else{
        console.log("No tenemos la cantidad del producto solicitado");
        this.ingresarCantidad();

        verficarCantidad = this.accesoProducto.amount >= this.amount
      }
    }
  }
}
