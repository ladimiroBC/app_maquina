import { Application } from "./app/app";
import { MenuMachineService } from "./app/application/services/menu-machine-service";
import { OperationsMachineService } from "./app/application/services/operations-machine-service";

const app:Application = new Application(
  new MenuMachineService(new OperationsMachineService)
)

let flag = "si";
console.log("***BIENVENIDO A NUESTRA MAQUINA EXPENDEDORA***");
while(flag==="si"){
  app.verProductos();
  
  app.seleccionarProducto();
  
  app.ingresarBillete();
  
  let instruccion = app.salir();
  
  flag = instruccion;  
}

console.log("Gracias por utilizar nuestra maquina, vuelva pronto");
