import {Component, Inject} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {PUBLIC_ROUTES} from "./navigation/routes.constant";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isPublicUrl: boolean;

  public constructor(@Inject(Router) private router: Router) {
    this.isPublicUrl = true;

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isPublicUrl = PUBLIC_ROUTES.some((route) => route.path === event.url.split('/')[1])
      }
    })
  }


  title = 'consumeter-frontend';
}
