import {Routes} from "@angular/router";
import {HomeComponent} from "../routes/home/home.component";
import {UserSettingsComponent} from "../routes/user/user-settings.component";
import {UserGuard} from "../guards/UserGuard";
import {LoginComponent} from "../routes/user/login.component";

export const USER_ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [UserGuard]
  },
  {
    path: 'user-settings',
    component: UserSettingsComponent,
    canActivate: [UserGuard]
  },
];

export const APP_ROUTES: Routes = [
  ...USER_ROUTES,
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: 'login'
  },
];
