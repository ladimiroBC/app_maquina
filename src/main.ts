import { Application } from "./app/app";
import { MenuMachineService } from "./app/application/services/menu.machine.service";
import { ErrorHandlingApp } from "./app/common/utils/error.handling.application";
import { MenuView } from "./app/common/utils/menu.view.application";
import { MessagesApp } from "./app/common/utils/messages.application";
import { ViewsApplication } from "./app/ui/console/components/views.application";

const app: Application = new Application(new ViewsApplication(
  new MenuMachineService(new ErrorHandlingApp(new MessagesApp)), new MessagesApp, new MenuView));

app.myStartConsole();


