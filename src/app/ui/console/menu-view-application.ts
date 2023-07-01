import { Menu } from "../../common/constants/view-menu-text";
import { IMenuView } from "../../domain/interface/menu-view-interface";

export class MenuView implements IMenuView{
  enumValues: string[];

  imprimirMenu(): void {
    this.enumValues = Object.values(Menu) as string[];
    this.enumValues.forEach((value) => {
      console.log(value);
    });
  }
}
