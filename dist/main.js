"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app/app");
const menu_machine_1 = require("./app/domain/classes/menu-machine");
const console_application_1 = require("./app/ui/console/console-application");
const menu_view_application_1 = require("./app/ui/console/menu-view-application");
const messages_application_1 = require("./app/ui/console/messages-application");
const app = new app_1.Application(new menu_machine_1.MenuMachine(new console_application_1.ConsoleApplication(new messages_application_1.MessagesApp(), new menu_view_application_1.MenuView()), new messages_application_1.MessagesApp()), new console_application_1.ConsoleApplication(new messages_application_1.MessagesApp(), new menu_view_application_1.MenuView()));
app.myStartConsole();
//# sourceMappingURL=main.js.map