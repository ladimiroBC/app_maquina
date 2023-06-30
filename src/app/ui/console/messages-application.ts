import { ConsoleText } from "../../common/constants/console-app-text";
import { MenuText } from "../../common/constants/menu_machine-text";

export class MessagesApp {
  showMessage(msn:ConsoleText | MenuText):void{
    console.log(msn);
  }
}
