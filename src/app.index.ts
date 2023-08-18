import './app/ui/web/views/application.machine.style.css'
import { Application } from "./app/app";
import { ComponentManager } from "./app/common/utils/component.manager";
import { ApplicationMachine } from "./app/ui/web/views/application.machine";


const app: Application = new Application(
  new ApplicationMachine(new ComponentManager));

app.startApplicationWeb();

console.log("Iniciando proyecto con webpack...:)");

