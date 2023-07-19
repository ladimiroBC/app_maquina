import { Product } from "../../domain/entitys/product";
import data from "../../../assets/data/products.json";
import { IMenuMachineService } from "./menu.machine.interface.service";
import { IMessagesApp } from "../../domain/interface/messages.application.interface";
import { PurchasedProduct } from "../../domain/entitys/purchased.product";

export class MenuMachineService implements IMenuMachineService {
  private amount: number = 0;
  private selection: string = "";
  private products: Product[] = [];
  private selectProduct: Product[] = [];
  private accesProduct: Product;
  private purchasedProduct: PurchasedProduct[] = [];

  constructor(private msn: IMessagesApp) { }

  createProduct(product: Product): void {
    this.products.push(product);
  }

  getMoney(money: number): PurchasedProduct[] {
    let total = this.accesProduct.price * this.amount;
    let purchased: PurchasedProduct;

    if (total < money) {
      let change = money - total;
      purchased = {
        productName: this.accesProduct.name,
        productAmount: this.amount,
        change: change
      }
      this.purchasedProduct.push(purchased);
    }
    return this.purchasedProduct;
  }

  selectionProduct(nameProduct: string): Product[] {
    this.products = data.products;
    this.selection = nameProduct;
    this.selectProduct = this.products.filter((product) => {
      return product.name === this.selection;
    })
    return this.selectProduct;
  }

  amountProduct(productAmount: number): boolean {
    let flag = false;
    this.amount = productAmount;
    this.accesProduct = this.selectProduct[0];
    let verifyAmount = this.accesProduct.amount >= this.amount;

    if (verifyAmount) {
      let newAmount = this.accesProduct.amount - this.amount;
      this.accesProduct.amount = newAmount;
      flag = true;
    }

    return flag;
  }

  showProducts(): Product[] {
    this.products = data.products;
    return this.products;
  }

  exit(instruction: string): string {
    return instruction;
  }
}
