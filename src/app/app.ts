import scanf from "scanf";
import { IViewsApplication } from "./domain/interface/view.application.interface";

export class Application {

  constructor(private views: IViewsApplication) { }

  myStartConsole(): boolean{
    let flag = false;
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
        flag = this.views.viewExit();
        break;
      default:
        console.log("Sorry, option not available :(");
    }
    return flag;
  }
}
