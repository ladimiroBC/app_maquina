import { ConsoleApp } from "../../common/constants/console.app";
import { FormProduct } from "../../common/constants/form.product";
import { MenuMachine } from "../../common/constants/menu.machine";

export interface IMessagesApp {
  showMessage(msn: ConsoleApp | MenuMachine): string;
  showFormProducto(form: FormProduct): void;
}
