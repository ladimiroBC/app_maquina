import { IApplicationMachine } from "./domain/interface/application.machine.interface";

export class Application {

  constructor(private app: IApplicationMachine) { }

  startApplicationWeb(): void {
    this.app.appMachine();
  }
}
