import { ConsoleText } from "../../common/constants/console-app-text";
import { MenuMachineText } from "../../common/constants/menu_machine-text";
import { IMessagesApp } from "../../domain/interface/messages-application-interface";

export class MessagesApp implements IMessagesApp{
  showMessage(msn: ConsoleText | MenuMachineText): void {
    console.log(msn);
  }
  
}
