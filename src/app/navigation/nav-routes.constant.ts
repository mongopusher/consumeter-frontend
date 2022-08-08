import {Routes} from "@angular/router";
import {HomeComponent} from "../routes/home/home.component";
import {UserSettingsComponent} from "../routes/user-settings/user-settings.component";

export const NAV_ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'account', component: UserSettingsComponent},
];
