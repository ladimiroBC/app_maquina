import { IErrorHandling } from "../../domain/interface/error.handling.interface";
import { IMessagesApp } from "../../domain/interface/messages.application.interface";
import { MenuMachine } from "../constants/menu.machine";

export class ErrorHandlingApp implements IErrorHandling {
  
  constructor(private msn: IMessagesApp){ }

  productSelection(): void {
    let message = this.msn.showMessage(MenuMachine.PRODUCT_NOT_REGISTRED);
    throw new Error(message);
  }

  productAmount(): void {
    let message = this.msn.showMessage(MenuMachine.INSUFFICIENTE_AMOUNT);
    throw new Error(message);
  }

  productMoney(): void {
    let message = this.msn.showMessage(MenuMachine.INSUFFICIENT_BACKGROUND);
    throw new Error(message);
  }
}
