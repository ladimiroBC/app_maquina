export interface IComponentManager {
  appView(selector: string, template: string): Promise<void>;
  appContainer(selector: string, template: string): Promise<void>;
}
