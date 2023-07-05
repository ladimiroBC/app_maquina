import { Menu } from "../../constants/view-menu-text";
import { IMenuView } from "../interface-utils/menu-view-interface";

export class MenuView implements IMenuView{
  enumValues: string[];

  printMenu(): void {
    this.enumValues = Object.values(Menu) as string[];
    this.enumValues.forEach((value) => {
      console.log(value);
    });
  }
}
