import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {NAV_ROUTES} from "./nav-routes.constant";
import {NavItemComponent} from "./nav-item/nav-item.component";
import {NavigationComponent} from "./navigation.component";
import {HomeComponent} from "../routes/home/home.component";
import {BrowserModule} from "@angular/platform-browser";
import {UserSettingsComponent} from "../routes/user-settings/user-settings.component";
import {ReactiveFormsModule} from "@angular/forms";
import {UserService} from "../routes/user-settings/user.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    NavItemComponent,
    NavigationComponent,
    HomeComponent,
    UserSettingsComponent,
  ],
  imports: [
    RouterModule.forRoot(NAV_ROUTES),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [
    RouterModule,
    NavigationComponent,
  ],
  providers: [UserService],
})
export class RoutingModule {
}
