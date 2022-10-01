import {ComponentFactory, ComponentRef, Inject, Injectable, ViewContainerRef} from "@angular/core";
import {GrowlMessageComponent} from "./growl-message.component";

@Injectable()
export class GrowlService {
  private viewContainerRef?: ViewContainerRef;
  private componentInstances: Array<ComponentRef<GrowlMessageComponent>>;

  public constructor() {
    this.componentInstances = [];
  }

  public registerViewContainerRef(viewContainerRef: ViewContainerRef): void {
    this.viewContainerRef = viewContainerRef;
  }

  public createGrowlMessage(message: string): void {
    if (this.viewContainerRef === undefined) {
      return;
    }

    const component = this.viewContainerRef.createComponent(GrowlMessageComponent);
    component.instance.setData({message});

    this.componentInstances.push(component);
  }

  public removeAllGrowlMessages(): void {
    setTimeout(() => {
      this.viewContainerRef?.clear()
    }, 2000);

    this.componentInstances.forEach((component) => {
      component.instance.remove();
    });
  }
}
