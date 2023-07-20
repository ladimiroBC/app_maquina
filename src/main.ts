import { Application } from "./app/app";
import { MenuMachineService } from "./app/application/services/menu.machine.service";
import { MenuView } from "./app/common/utils/menu.view.application";
import { MessagesApp } from "./app/common/utils/messages.application";
import { ViewsApplication } from "./app/ui/console/components/views.application";

const app: Application = new Application(new ViewsApplication(new MenuMachineService, new MessagesApp, new MenuView));

let flag = true;

while (flag) {

  app.myStartConsole();

  if (app.myStartConsole() == false) {
    flag = false;
  }
}

