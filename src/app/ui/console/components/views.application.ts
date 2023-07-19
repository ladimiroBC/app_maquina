import scanf from "scanf";
import { IMenuMachineService } from "../../../application/services/menu.machine.interface.service";
import { IMenuView } from "../../../domain/interface/menu.view.interface";
import { IMessagesApp } from "../../../domain/interface/messages.application.interface";
import { IViewsApplication } from "../../../domain/interface/view.application.interface";
import { ConsoleApp } from "../../../common/constants/console.app";
import { IFormCreateProduct } from "../../../domain/interface/form.create.product.interface";
import { MenuMachine } from "../../../common/constants/menu.machine";

export class ViewsApplication implements IViewsApplication {
  constructor(
    private menuSVC: IMenuMachineService,
    private msn: IMessagesApp,
    private menuView: IMenuView,
    private form: IFormCreateProduct
  ) { }

  viewCreateProduct(): void {
    let product = this.form.formularioProduct();
    this.menuSVC.createProduct(product);
  }

  viewShowProduct(): void {
    let products = this.menuSVC.showProducts();
    products.forEach((product, index) => {
      console.log(
        `${index + 1}. product--> ${product.name} price--> ${product.price
        } stock--> ${product.amount}`
      );
    });
  }

  viewSelectProduct(): void {
    let nameProduct: string;
    console.log(this.msn.showMessage(ConsoleApp.ENTER_NAME));
    nameProduct = scanf("%s");
    let product = this.menuSVC.selectionProduct(nameProduct);

    try {
      if (product.length == 0) {
        let message = this.msn.showMessage(MenuMachine.PRODUCT_NOT_REGISTRED);
        throw new Error(message);
      } else {
        console.log(`Product select--> ${product[0].name}`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  viewAmountProduct(): void {
    let productAmount: number;
    console.log(this.msn.showMessage(ConsoleApp.ENTER_AMOUNT));
    productAmount = scanf("%f");
    let flag = this.menuSVC.amountProduct(productAmount);

    try {
      if (flag) {
        console.log(`Requested amount--> ${productAmount}`);
      } else {
        let message = this.msn.showMessage(MenuMachine.INSUFFICIENTE_AMOUNT);
        throw new Error(message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  viewGetMoney(): void {
    this.viewSelectProduct();
    this.viewAmountProduct();
    let money: number;
    console.log(this.msn.showMessage(ConsoleApp.ENTER_MONEY));
    money = scanf("%f");
    let purchased = this.menuSVC.getMoney(money);

    try {
      if (purchased.length == 0) {
        let message = this.msn.showMessage(MenuMachine.INSUFFICIENT_BACKGROUND);
        throw new Error(message);
      } else {
        console.log(this.msn.showMessage(MenuMachine.SALE));
        console.log(`Product purchased--> ${purchased[0].productName}`);
        console.log(`Amount product--> ${purchased[0].productAmount}`);
        console.log(`Change--> ${purchased[0].change}`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  viewMenu(): void {
    this.menuView.printMenu();
  }

  viewExit(): void {
    let instruction = "";
    console.log(this.msn.showMessage(ConsoleApp.DO_YOU_WANT_TO_GO_OUT));
    instruction = scanf("%s");
    let instructionExit = this.menuSVC.exit(instruction);

    switch (instructionExit) {
      case "yes":
        console.log(this.msn.showMessage(ConsoleApp.MESSAGE_EXIT));
        break;
      case "no":
        console.log(this.msn.showMessage(ConsoleApp.ACTION_TO_PERFORM));
        break;
      default:
        console.log("Sorry, option not available :(");
    }
  }
}
