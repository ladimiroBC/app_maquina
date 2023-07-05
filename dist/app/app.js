"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const scanf_1 = __importDefault(require("scanf"));
class Application {
    constructor(views) {
        this.views = views;
    }
    myStartConsole() {
        this.views.viewMenu();
        let instruction = (0, scanf_1.default)("%d");
        switch (instruction) {
            case 1:
                this.views.viewCreateProduct();
                break;
            case 2:
                this.views.viewShowProduct();
                break;
            case 3:
                this.views.viewSelectProduct();
                break;
            case 4:
                this.views.viewGetMoney();
                break;
            case 5:
                this.views.viewExit();
                break;
            default:
                console.log("Lo sentimos, opcion no disponible :(");
        }
    }
}
exports.Application = Application;
//# sourceMappingURL=app.js.map