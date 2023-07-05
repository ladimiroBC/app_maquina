import { Application } from "./app/app";
import { MenuMachineService } from "./app/application/services/menu-machine-service";
import { FormCreateProduct } from "./app/common/utils/class-utils/form-create-product";
import { MenuView } from "./app/common/utils/class-utils/menu-view-application";
import { MessagesApp } from "./app/common/utils/class-utils/messages-application";
import { ViewsApplication } from "./app/ui/console/components/views-application";

const app: Application = new Application(
  new ViewsApplication(
    new MenuMachineService(new MessagesApp()),
    new MessagesApp(),
    new MenuView(),
    new FormCreateProduct(new MessagesApp())
  )
);

app.myStartConsole();
