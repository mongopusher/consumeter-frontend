import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {Inject, Injectable} from "@angular/core";
import {UserService} from "../routes/user/user.service";
import {AuthService} from "../shared/auth/auth.service";

@Injectable()
export class UserGuard implements CanActivate {
  public constructor(@Inject(AuthService) private authService: AuthService) {
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isLoggedIn = this.authService.validateTokenExpiration();

    return isLoggedIn;
  }
}
