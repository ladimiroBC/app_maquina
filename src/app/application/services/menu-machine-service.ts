import { IProduct } from "../../domain/entitys/product-interface";
import data from "../../../assets/data/products.json";
import { IMenuMachineService } from "./interface-menu-machine-service";
import { IMessagesApp } from "../../common/utils/interface-utils/messages-application-interface";
import { MenuMachineText } from "../../common/constants/menu_machine-text";
import { ConsoleText } from "../../common/constants/console-app-text";

export class MenuMachineService implements IMenuMachineService {
  private amount: number = 0;
  private selection: string = "";
  private products: IProduct[] = [];
  private selectProduct: IProduct[] = [];
  private accesProduct: IProduct;

  constructor(private msn: IMessagesApp) {}

  createProduct(product: IProduct): void {
    this.products.push(product);
  }

  getMoney(money: number): void {
    let flag = true;

    while (flag) {
      let total = this.accesProduct.price * this.amount;

      if (total < money) {
        let change = money - this.accesProduct.price;

        this.msn.showMessage(MenuMachineText.venta);
        console.log(`Product ${this.accesProduct.name} sold`);
        console.log(`Amount sold ${this.amount}`);
        console.log(`Change ${change}`);

        flag = false;
      
      } else {
        this.msn.showMessage(MenuMachineText.insufucienteFondo);
        flag = false;
      }
    }
  }

  selectionProduct(nameProduct: string): void | string {
    this.products = data.products;
    this.selection = nameProduct;
    
    let find = this.products.some((product) => {
      return product.name == this.selection;
    });
    
    let flag = true;
    let flag2 = "";
    
    while (flag) {
      
      if (find) {
        this.selectProduct = this.products.filter((product) => {
          return product.name == this.selection;
        });
        this.accesProduct = this.selectProduct[0];
        this.msn.showMessage(MenuMachineText.producto);
        console.log(this.selection);
        
        flag = false;
        return (flag2 = "si");
      
      } else {
        this.msn.showMessage(MenuMachineText.productoNoRegistrado);
        flag = false;
      }
    }
  }

  showProducts(): IProduct[] {
    this.products = data.products;
    return this.products;
  }

  amountProduct(productAmount: number): void | string {
    this.amount = productAmount;
    let verifyAmount = this.accesProduct.amount >= this.amount;
    let flag = true;
    let flag2 = "";

    while (flag) {
      
      if (verifyAmount) {
        let newAmount = this.accesProduct.amount - this.amount;
        this.accesProduct.amount = newAmount;

        flag = false;
        return (flag2 = "si");
      
      } else {
        this.msn.showMessage(MenuMachineText.insuficienteCantidad);
        flag = false;
      }
    }
  }

  exit(): void {
    this.msn.showMessage(ConsoleText.salirApp);
  }
}
