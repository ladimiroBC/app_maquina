import { IProduct } from './../entitys/product-interface';

export interface OperationsMachine{
  cargarProducto():void;
  ingresarNombreProducto():void;
  seleccionarProducto(): void;
  ingresarBillete():void
  comprarProducto(): void;
  ingresarCantidad():void;
  cantidadProducto(): void;
}
