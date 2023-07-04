import { IProduct } from "../entitys/product-interface";

export interface IConsoleApplication {
  IngresarNombreProducto():string;
  IngresarDineroCompra():number;
  IngresarCantidadProducto():number;
  FormularioProducto():IProduct;
  salirMaquina():void;
  start():void;
}
