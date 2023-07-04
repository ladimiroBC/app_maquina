import { IProduct } from "../../domain/entitys/product-interface";
import data from "../../../assets/data/products.json";
import { IMenuMachineService } from "./interface-menu-machine-service";
import { IMessagesApp } from "../../domain/interface/messages-application-interface";
import { MenuMachineText } from "../../common/constants/menu_machine-text";

export class MenuMachineService implements IMenuMachineService{
  private products: IProduct[] = [];
  private selectProduct: IProduct[] = [];
  private accesProduct: IProduct;

  constructor(private msn:IMessagesApp) {}

  createProduct(product: IProduct): void {
    this.products.push(product);
  }

  getMoney(money: number): void {
      
  }
  
  selectionProduct(selection: string): void {
    this.products = data.products;
    let find = this.products.some((product) => {
      return product.name == selection;
    });
    let flag = true;

    while(flag) {
      if(find) {
        this.selectProduct = this.products.filter((product) => {
          return product.name == selection;
        })
        this.msn.showMessage(MenuMachineText.producto);
        console.log(selection);
        flag = false;
      }else {
        this.msn.showMessage(MenuMachineText.productoNoRegistrado);
      }
    }
  }

  showProducts(): IProduct[] {
    this.products = data.products;
    return this.products;
  }

  amountProduct(amount:number): void {
    let verifyAmount = this.accesProduct.amount >= amount;
    let flag = true;

    while (flag) {
      if (verifyAmount) {
        let newAmount = this.accesProduct.amount - amount;
        this.accesProduct.amount = newAmount;

        flag = false;
      } else {
        this.msn.showMessage(MenuMachineText.insuficienteCantidad);
      }
    }
  }

  exit(): void {
    throw new Error("Method not implemented.");
  }
}
