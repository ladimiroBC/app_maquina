import { ConsoleApp } from "../constants/console.app";
import { FormProduct } from "../constants/form.product";
import { MenuMachine } from "../constants/menu.machine";
import { IMessagesApp } from "../../domain/interface/messages.application.interface";

export class MessagesApp implements IMessagesApp {
  showFormProducto(form: FormProduct): void {
    console.log(form);
  }

  showMessage(msn: ConsoleApp | MenuMachine): string {
    return msn;
  }
}
