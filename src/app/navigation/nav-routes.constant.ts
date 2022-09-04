import {Routes} from "@angular/router";
import {HomeComponent} from "../routes/home/home.component";
import {UserSettingsComponent} from "../routes/user/user-settings.component";
import {LoginComponent} from "../routes/user/login.component";

export const NAV_ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'account', component: UserSettingsComponent},
  {path: 'login', component: LoginComponent},
];
