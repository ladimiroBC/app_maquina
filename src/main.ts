import { Application } from "./app/app";
import { MenuMachineService } from "./app/application/services/menu-machine-service";
import { MenuMachine } from "./app/domain/classes/menu-machine";
import { ConsoleApplication } from "./app/ui/console/console-application";
import { MessagesApp } from "./app/ui/console/messages-application";

//app.myStartConsole();
const app: Application = new Application(
  new MenuMachineService(
    new MenuMachine(
      new ConsoleApplication(new MessagesApp()),
      new MessagesApp()
    )
  )
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
