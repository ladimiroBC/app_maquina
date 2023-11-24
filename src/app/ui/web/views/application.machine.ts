import { IApplicationMachine } from "src/app/domain/interface/application.machine.interface";
import { IComponentManager } from "src/app/domain/interface/component.manager.interface";

export class ApplicationMachine implements IApplicationMachine{

  constructor(private components: IComponentManager) { }

  async appMachine(): Promise<void> {
    await this.components.appView('root', 'application.machine');
    await this.components.appContainer('container-app', 'container.app');
  }
}
