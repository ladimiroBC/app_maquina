import { OperationsMachine } from "./operations-machine-interface";

export interface MenuMachine extends OperationsMachine{
  verProductos(): void;
  seleccionarProducto(): void;
  ingresarBillete(): void;
  //salir(): string;
}
