import { IComponentManager } from "src/app/domain/interface/component.manager.interface";

export class ComponentManager implements IComponentManager {
  
  async appView(selector: string, template: string): Promise<void> {
    let root: HTMLElement = document.getElementById(selector)!;
    let response = await fetch(`/src/app/ui/web/views/${template}.html`);
    let htmlResponse = await response.text();
    root.innerHTML = htmlResponse; 
  }
}
