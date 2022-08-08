import {Component, OnInit} from '@angular/core';
import {NAV_ROUTES} from "./nav-routes.constant";

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  routes = NAV_ROUTES;
  isShown: boolean;

  public constructor() {
    this.isShown = false;
  }

  ngOnInit(): void {
  }

  toggleNavBar(): void {
    this.isShown = !this.isShown;
  }
}
