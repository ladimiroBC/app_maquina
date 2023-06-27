"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app/app");
const menu_machine_service_1 = require("./app/application/services/menu-machine-service");
const app = new app_1.Application(new menu_machine_service_1.MenuMachineService);
app.cargarProducto({
    name: "sprite",
    price: 400,
    amount: 5
});
app.verProducto();
