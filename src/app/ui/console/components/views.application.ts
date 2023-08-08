import scanf from "scanf";
import { IMenuMachineService } from "../../../application/services/menu.machine.interface.service";
import { IMenuView } from "../../../domain/interface/menu.view.interface";
import { IMessagesApp } from "../../../domain/interface/messages.application.interface";
import { IViewsApplication } from "../../../domain/interface/view.application.interface";
import { ConsoleApp } from "../../../common/constants/console.app";
import { Product } from "../../../domain/entitys/product";
import { FormProduct } from "../../../common/constants/form.product";

export class ViewsApplication implements IViewsApplication {
  constructor(
    private menuSVC: IMenuMachineService,
    private msn: IMessagesApp,
    private menuView: IMenuView,
  ) { }

  viewCreateProduct(): void {
    let product: Product = {};
    this.msn.showFormProducto(FormProduct.ENTER_NAME);
    product.name = scanf("%s");
    this.msn.showFormProducto(FormProduct.ENTER_PRICE);
    product.price = scanf("%d");
    this.msn.showFormProducto(FormProduct.ENTER_AMOUNT);
    product.amount = scanf("%d");

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

    try {
      let product = this.menuSVC.selectionProduct(nameProduct);
      console.log(`Product select--> ${product}`);
    } catch (error) {
      console.log(error);
    }
  }

  viewAmountProduct(): void {
    let productAmount: number;
    console.log(this.msn.showMessage(ConsoleApp.ENTER_AMOUNT));
    productAmount = scanf("%f");

    try {
      this.menuSVC.amountProduct(productAmount);
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

    try {
      let purchased = this.menuSVC.getMoney(money);

      console.log(`Product purchased--> ${purchased[0].productName}`);
      console.log(`Amount product--> ${purchased[0].productAmount}`);
      console.log(`Change--> ${purchased[0].change}`);
    } catch (error) {
      console.log(error);
    }
  }

  viewMenu(): void {
    this.menuView.printMenu();
  }

  viewExit(): boolean {
    let flag = false;
    let instruction = "";
    console.log(this.msn.showMessage(ConsoleApp.DO_YOU_WANT_TO_GO_OUT));
    instruction = scanf("%s");
    let instructionExit = this.menuSVC.exit(instruction);

    switch (instructionExit) {
      case "yes":
        console.log(this.msn.showMessage(ConsoleApp.MESSAGE_EXIT));
        break;
      case "no":
        flag = true;
        break;
      default:
        console.log("Sorry, option not available :(");
    }
    return flag;
  }
}
