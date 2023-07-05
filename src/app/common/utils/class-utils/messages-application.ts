import { ConsoleText } from "../../constants/console-app-text";
import { FormProduct } from "../../constants/form-producto-text";
import { MenuMachineText } from "../../constants/menu_machine-text";
import { IMessagesApp } from "../interface-utils/messages-application-interface";

export class MessagesApp implements IMessagesApp{
  showFormProducto(form: FormProduct): void {
    console.log(form);
  }
  
  showMessage(msn: ConsoleText | MenuMachineText): void {
    console.log(msn);
  }
}
