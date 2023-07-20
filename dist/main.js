"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app/app");
const menu_machine_service_1 = require("./app/application/services/menu.machine.service");
const menu_view_application_1 = require("./app/common/utils/menu.view.application");
const messages_application_1 = require("./app/common/utils/messages.application");
const views_application_1 = require("./app/ui/console/components/views.application");
const app = new app_1.Application(new views_application_1.ViewsApplication(new menu_machine_service_1.MenuMachineService, new messages_application_1.MessagesApp, new menu_view_application_1.MenuView));
let flag = true;
while (flag) {
    app.myStartConsole();
    if (app.myStartConsole() == false) {
        flag = false;
    }
}
//# sourceMappingURL=main.js.map