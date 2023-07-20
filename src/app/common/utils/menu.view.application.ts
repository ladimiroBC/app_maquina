import { IMenuView } from "../../domain/interface/menu.view.interface";
import { ViewMenu } from "../constants/view.menu";

export class MenuView implements IMenuView {
  enumValues: string[];

  printMenu(): void {
    this.enumValues = Object.values(ViewMenu) as string[];
    this.enumValues.forEach((value) => {
      console.log(value);
    });
  }
}
