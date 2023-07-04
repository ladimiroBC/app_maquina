import { IProduct } from "../entitys/product-interface";

export interface IMenuMachine{
  createProduct(product: IProduct): void;
  showProducts(): IProduct[];
  selectionProduct(selection:string): void;
  getMoney(money:number): void;
  exit(): void;
}
