import scanf from "scanf";
import { IMenuMachineService } from "../../../application/services/interface-menu-machine-service";
import { IMenuView } from "../../../common/utils/interface-utils/menu-view-interface";
import { IMessagesApp } from "../../../common/utils/interface-utils/messages-application-interface";
import { IViewsApplication } from "./views-applications-interface";
import { ConsoleText } from "../../../common/constants/console-app-text";
import { IFormCreateProduct } from "../../../common/utils/interface-utils/form-create-product-interface";

export class ViewsApplication implements IViewsApplication {
  constructor(
    private menuSVC: IMenuMachineService,
    private msn: IMessagesApp,
    private menuView: IMenuView,
    private form: IFormCreateProduct
  ) {}

  viewCreateProduct(): void {
    let product = this.form.formularioProduct();
    this.menuSVC.createProduct(product);
  }

  viewShowProduct(): void {
    let products = this.menuSVC.showProducts();
    products.forEach((product, index) => {
      console.log(
        `${index + 1}. product--> ${product.name} price--> ${
          product.price
        } stock--> ${product.amount}`
      );
    });
  }

  viewSelectProduct(): void {
    let name: string;
    this.msn.showMessage(ConsoleText.ENTER_NAME);
    name = scanf("%s");
    
    this.menuSVC.selectionProduct(name);
  }

  viewGetMoney(): void {
    let name: string;
    this.msn.showMessage(ConsoleText.ENTER_NAME);
    name = scanf("%s");
    
    let flag = this.menuSVC.selectionProduct(name);

    if (flag == "si") {
      let amount: number;
      this.msn.showMessage(ConsoleText.ENTER_AMOUNT);
      amount = scanf("%d");

      let flag2 = this.menuSVC.amountProduct(amount);

      if (flag2 == "si") {
        let money: number;
        this.msn.showMessage(ConsoleText.ENTER_MONEY);
        money = scanf("%d");

        this.menuSVC.getMoney(money);
      }
    }
  }

  viewMenu(): void {
    this.menuView.printMenu();
  }

  viewExit(): void {
    this.menuSVC.exit();
  }
}
