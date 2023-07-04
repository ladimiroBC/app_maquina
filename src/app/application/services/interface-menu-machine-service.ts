import { IMenuMachine } from "../../domain/interface/menu-machine-interface";

export interface IMenuMachineService extends IMenuMachine{
  amountProduct(amount:number): void;
}
