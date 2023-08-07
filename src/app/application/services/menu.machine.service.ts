import { Product } from "../../domain/entitys/product";
import data from "../../../assets/data/products.json";
import { IMenuMachineService } from "./menu.machine.interface.service";
import { PurchasedProduct } from "../../domain/entitys/purchased.product";
import { IErrorHandling } from "../../domain/interface/error.handling.interface";

export class MenuMachineService implements IMenuMachineService {
  private amount: number = 0;
  private selection: string = "";
  private products: Product[] = [];
  private selectProduct: Product[] = [];
  private accesProduct: Product;
  private purchasedProduct: PurchasedProduct[] = [];

  constructor(private errorHandling: IErrorHandling) { }

  createProduct(product: Product): void {
    this.products.push(product);
  }

  getMoney(money: number): PurchasedProduct[] {
    let total = this.accesProduct.price! * this.amount;
    let purchased: PurchasedProduct;

    if (total < money) {
      let change = money - total;
      purchased = {
        productName: this.accesProduct.name!,
        productAmount: this.amount,
        change: change
      }
      this.purchasedProduct.push(purchased);
    }

    try {
      if (this.purchasedProduct.length == 0) {
        this.errorHandling.productMoney();
      } else {
        this.purchasedProduct;
      }
    } catch (error) {
      console.log(error);
    }
    return this.purchasedProduct;
  }

  selectionProduct(nameProduct: string): string {
    this.products = data.products;
    this.selection = nameProduct;
    this.selectProduct = this.products.filter((product) => {
      return product.name === this.selection;
    })

    try {
      if (this.selectProduct.length == 0) {
        this.errorHandling.productSelection();
      } else {
        this.selectProduct;
      }
    } catch (error) {
      console.log(error);
    }
    return this.selectProduct[0].name!;
  }

  amountProduct(productAmount: number): number {
    let flag = false;
    this.amount = productAmount;
    this.accesProduct = this.selectProduct[0];
    let verifyAmount = this.accesProduct.amount! >= this.amount;

    if (verifyAmount) {
      let newAmount = this.accesProduct.amount! - this.amount;
      this.accesProduct.amount = newAmount;
      flag = true;
    }

    try {
      if (flag) {
        this.amount;
      } else {
        this.errorHandling.productAmount();
      }
    } catch (error) {
      console.log(error);
    }
    return this.amount;
  }

  showProducts(): Product[] {
    this.products = data.products;
    return this.products;
  }

  exit(instruction: string): string {
    return instruction;
  }
}
