"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuView = void 0;
const view_menu_1 = require("../constants/view.menu");
class MenuView {
    printMenu() {
        this.enumValues = Object.values(view_menu_1.ViewMenu);
        this.enumValues.forEach((value) => {
            console.log(value);
        });
    }
}
exports.MenuView = MenuView;
