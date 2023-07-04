import { ConsoleText } from "../../common/constants/console-app-text";
import { FormProduct } from "../../common/constants/form-producto-text";
import { MenuMachineText } from "../../common/constants/menu_machine-text";
import { IMessagesApp } from "../../domain/interface/messages-application-interface";

export class MessagesApp implements IMessagesApp{
  showFormProducto(form: FormProduct): void {
    console.log(form);
  }
  
  showMessage(msn: ConsoleText | MenuMachineText): void {
    console.log(msn);
  }
}
