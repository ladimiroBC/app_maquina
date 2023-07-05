"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuView = void 0;
const view_menu_text_1 = require("../../constants/view-menu-text");
class MenuView {
    printMenu() {
        this.enumValues = Object.values(view_menu_text_1.Menu);
        this.enumValues.forEach((value) => {
            console.log(value);
        });
    }
}
exports.MenuView = MenuView;
//# sourceMappingURL=menu-view-application.js.map