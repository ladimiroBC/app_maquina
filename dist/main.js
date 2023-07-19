"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app/app");
const menu_machine_service_1 = require("./app/application/services/menu.machine.service");
const form_create_product_1 = require("./app/common/utils/form.create.product");
const menu_view_application_1 = require("./app/common/utils/menu.view.application");
const messages_application_1 = require("./app/common/utils/messages.application");
const views_application_1 = require("./app/ui/console/components/views.application");
const app = new app_1.Application(new views_application_1.ViewsApplication(new menu_machine_service_1.MenuMachineService(new messages_application_1.MessagesApp), new messages_application_1.MessagesApp, new menu_view_application_1.MenuView, new form_create_product_1.FormCreateProduct(new messages_application_1.MessagesApp)));
app.myStartConsole();
//# sourceMappingURL=main.js.map