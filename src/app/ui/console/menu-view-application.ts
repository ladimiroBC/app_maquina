import { IMenuView } from "../../domain/interface/menu-view-interface";

export class MenuView implements IMenuView{
  enumValues: string[];

  imprimirMenu(): void {
    this.enumValues = Object.values(MenuView) as string[];
    this.enumValues.forEach((value) => {
      console.log(value);
    });
  }
}
