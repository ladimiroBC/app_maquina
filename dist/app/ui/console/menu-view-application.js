"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuView = void 0;
class MenuView {
    imprimirMenu() {
        this.enumValues = Object.values(MenuView);
        this.enumValues.forEach((value) => {
            console.log(value);
        });
    }
}
exports.MenuView = MenuView;
