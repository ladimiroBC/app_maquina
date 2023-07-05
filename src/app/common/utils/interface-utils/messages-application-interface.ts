import { ConsoleText } from "../../constants/console-app-text";
import { FormProduct } from "../../constants/form-producto-text";
import { MenuMachineText } from "../../constants/menu_machine-text";

export interface IMessagesApp {
  showMessage(msn: ConsoleText | MenuMachineText):void;
  showFormProducto(form: FormProduct):void;
}
