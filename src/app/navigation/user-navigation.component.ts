import {Component, Inject, OnInit} from '@angular/core';
import {APP_ROUTES, USER_ROUTES} from "./routes.constant";
import {UserService} from "../routes/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'user-navigation',
  templateUrl: './user-navigation.component.html',
  styleUrls: ['./user-navigation.component.scss']
})
export class UserNavigationComponent {
  routes = USER_ROUTES;
  isShown: boolean;

  public constructor(@Inject(UserService) private userService: UserService,
                     @Inject(Router)private router: Router) {
    this.isShown = false;
  }



  public toggleNavBar(): void {
    this.isShown = !this.isShown;
  }

  public logout(): void {
    this.userService.logout();

    void this.router.navigate(['login'])
  }
}
