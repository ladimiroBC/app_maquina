import scanf from "scanf";
import { MenuMachine } from "../../domain/interface/menu-machine-interface";
import { OperationsMachine } from "../../domain/interface/operations-machine-interface";

export class MenuMachineService implements MenuMachine{
  
  private operations:OperationsMachine;

  constructor(operations:OperationsMachine){
    this.operations = operations;
  }

  verProductos(): void {
    this.operations.cargarProducto();    
  }
  
  seleccionarProducto(): void {
    this.operations.ingresarNombreProducto();
    this.operations.seleccionarProducto();  
  }
  
  ingresarBillete(): void {
    this.operations.ingresarBillete();
    this.operations.ingresarCantidad();
    this.operations.comprarProducto();  
  }

  salir():string{
    console.log("Quiere seguir en nuestra aplicacion, digite 'si' para continuar, 'no' para salir");
    let instruccion = scanf("%s");

    return instruccion;
  }
}
