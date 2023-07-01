export class Menu {
  private enumValues: string[];

  imprimirMenu(): void {
    this.enumValues = Object.values(Menu) as string[];
    this.enumValues.forEach((value) => {
      console.log(value);
    });
  }
}
