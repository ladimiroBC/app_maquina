"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuView = void 0;
const view_menu_text_1 = require("../../common/constants/view-menu-text");
class MenuView {
    imprimirMenu() {
        this.enumValues = Object.values(view_menu_text_1.Menu);
        this.enumValues.forEach((value) => {
            console.log(value);
        });
    }
}
exports.MenuView = MenuView;
