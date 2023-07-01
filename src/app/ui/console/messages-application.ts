import { ConsoleText } from "../../common/constants/console-app-text";
import { MenuMachineText } from "../../common/constants/menu_machine-text";

export class MessagesApp {
  showMessage(msn:ConsoleText | MenuMachineText):void{
    console.log(msn);
  }
}
