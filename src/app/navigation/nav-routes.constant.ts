import {Routes} from "@angular/router";
import {HomeComponent} from "../routes/home/home.component";
import {UserSettingsComponent} from "../routes/user/user-settings.component";
import {LoginComponent} from "../routes/user/login.component";
import {UserGuard} from "../guards/UserGuard";

export const NAV_ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'account',
    component: UserSettingsComponent,
    canActivate: [UserGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
];
