import { Application } from "./app/app";
import { MenuMachineService } from "./app/application/services/menu-machine-service";
import { OperationsMachine } from "./app/domain/classes/operations-machine";
import { ConsoleApplication } from "./app/ui/console/console-application";

const app: Application = new Application(
  new MenuMachineService(new OperationsMachine(new ConsoleApplication()))
);

let flag = "si";
console.log("***BIENVENIDO A NUESTRA MAQUINA EXPENDEDORA***");
while (flag === "si") {
  app.verProductos();

  app.seleccionarProducto();

  app.ingresarBillete();

  let instruccion = app.salir();

  flag = instruccion;
}

console.log("Gracias por utilizar nuestra maquina, vuelva pronto");
