import { Product } from "../entitys/product";
import { PurchasedProduct } from "../entitys/purchased.product";

export interface IMenuMachine {
  createProduct(product: Product): void;
  showProducts(): Product[];
  selectionProduct(selection:string): Product[];
  getMoney(money:number): PurchasedProduct[];
  exit(instruction:string): string;
}
