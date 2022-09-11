import {Component, Inject, OnInit} from '@angular/core';
import {NAV_ROUTES} from "./nav-routes.constant";
import {UserService} from "../routes/user/user.service";

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  routes = NAV_ROUTES;
  isShown: boolean;

  public constructor(@Inject(UserService) private userService: UserService) {
    this.isShown = false;
  }

  public toggleNavBar(): void {
    this.isShown = !this.isShown;
  }

  public logout(): void {
    this.userService.logout();
  }
}
