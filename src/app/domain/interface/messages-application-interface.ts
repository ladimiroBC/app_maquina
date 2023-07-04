import { ConsoleText } from "../../common/constants/console-app-text";
import { FormProduct } from "../../common/constants/form-producto-text";
import { MenuMachineText } from "../../common/constants/menu_machine-text";

export interface IMessagesApp {
  showMessage(msn: ConsoleText | MenuMachineText):void;
  showFormProducto(form: FormProduct):void;
}
