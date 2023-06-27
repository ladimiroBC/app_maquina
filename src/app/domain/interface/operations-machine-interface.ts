import { IProduct } from "../entitys/product-interface";

export interface OperationsMachine{
  creacionProducto(products:IProduct):void;
  mostrarProducto():void;
  busquedaProducto(): void;
  compraProducto(): void;
  cantidadProducto(): void;
}
