import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {Inject, Injectable} from "@angular/core";
import {UserService} from "../routes/user/user.service";

@Injectable()
export class UserGuard implements CanActivate {
  public constructor(@Inject(UserService) private userService: UserService,
                     private router: Router) {
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isLoggedIn = this.userService.isLoggedIn();

    if (!isLoggedIn) {
      void this.router.navigate(['/login']);
    }
    return isLoggedIn;
  }
}
