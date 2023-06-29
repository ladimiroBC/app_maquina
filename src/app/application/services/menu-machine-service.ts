import { IMenuMachine } from "../../domain/interface/menu-machine-interface";
import { IOperationsMachine } from "../../domain/interface/operations-machine-interface";

export class MenuMachineService implements IMenuMachine {
  private operations: IOperationsMachine;

  constructor(operations: IOperationsMachine) {
    this.operations = operations;
  }

  verProductos(): void {
    this.operations.cargarProducto();
  }
  seleccionarProducto(): void {
    this.operations.seleccionarProducto();
  }
  ingresarBillete(): void {
    this.operations.comprarProducto();
  }
  salir(): string {
    throw new Error("Method not implemented.");
  }
}
