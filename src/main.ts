import { Application } from "./app/app";
import { MenuMachine } from "./app/domain/classes/menu-machine";
import { ConsoleApplication } from "./app/ui/console/console-application";
import { MenuView } from "./app/ui/console/menu-view-application";
import { MessagesApp } from "./app/ui/console/messages-application";


const app: Application = new Application(
  new MenuMachine(
    new ConsoleApplication(new MessagesApp(), new MenuView()),
    new MessagesApp()
  ),
  new ConsoleApplication(new MessagesApp(), new MenuView())
);

app.myStartConsole();
