import scanf from "scanf";
import { IViewsApplication } from "./ui/console/components/views-applications-interface";


export class Application {
  
  constructor(private views:IViewsApplication){}
  
  myStartConsole(){
    this.views.viewMenu();
    let instruction = scanf("%d");
    
    switch (instruction) {
      case 1:
        this.views.viewCreateProduct();
        break;
      case 2:
        this.views.viewShowProduct();
        break;
      case 3:
        this.views.viewSelectProduct();
        break;
      case 4:
        this.views.viewGetMoney();
        break;
      case 5:
        this.views.viewExit();
        break;
      default:
        console.log("Lo sentimos, opcion no disponible :(");          
    }
  }
}
