import {Component, Inject, OnInit} from '@angular/core';
import {APP_ROUTES, USER_ROUTES} from "./routes.constant";
import {UserService} from "../routes/user/user.service";

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  routes = USER_ROUTES;
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
