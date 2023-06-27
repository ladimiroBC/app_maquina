import { Application } from "./app/app";
import { MenuMachineService } from "./app/application/services/menu-machine-service";


const app:Application = new Application(new MenuMachineService);


