import { Application } from "./app/app";
import { MenuMachineService } from "./app/application/services/menu-machine-service";


const app:Application = new Application(new MenuMachineService);
app.cargarProducto({
  name:"sprite",
  price:400,
  amount:5
})

app.verProducto();

