import {Component, Inject} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {Observable, Subject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public currentUrl: Subject<string>;

  public constructor(@Inject(Router) private router: Router) {
    this.currentUrl = new Subject();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl.next(event.url);
      }
    })
  }


  title = 'consumeter-frontend';
}
