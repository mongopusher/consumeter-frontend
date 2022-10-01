import {Component, ComponentRef, Inject, ViewContainerRef} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {PUBLIC_ROUTES} from "./navigation/routes.constant";
import {GrowlMessageComponent} from "./common/growls/growl-message.component";
import {GrowlService} from "./common/growls/growl.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'consumeter-frontend';
  public isPublicUrl: boolean;

  public constructor(@Inject(Router) private router: Router,
                     @Inject(GrowlService) private growlService: GrowlService,
                     private viewContainerRef: ViewContainerRef) {
    this.isPublicUrl = true;
    this.growlService.registerViewContainerRef(viewContainerRef);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isPublicUrl = PUBLIC_ROUTES.some((route) => route.path === event.urlAfterRedirects.split('/')[1]);
        this.growlService.removeAllGrowlMessages();
      }
    });
  }
}
