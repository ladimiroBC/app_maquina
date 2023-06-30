"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app/app");
const menu_machine_service_1 = require("./app/application/services/menu-machine-service");
const menu_machine_1 = require("./app/domain/classes/menu-machine");
const console_application_1 = require("./app/ui/console/console-application");
const messages_application_1 = require("./app/ui/console/messages-application");
const app = new app_1.Application(new menu_machine_service_1.MenuMachineService(new menu_machine_1.MenuMachine(new console_application_1.ConsoleApplication(new messages_application_1.MessagesApp()), new messages_application_1.MessagesApp())));
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
