"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app/app");
const menu_machine_service_1 = require("./app/application/services/menu-machine-service");
const operations_machine_service_1 = require("./app/application/services/operations-machine-service");
const app = new app_1.Application(new menu_machine_service_1.MenuMachineService(new operations_machine_service_1.OperationsMachineService));
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
