import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {NAV_ROUTES} from "./nav-routes.constant";
import {NavItemComponent} from "./nav-item/nav-item.component";
import {NavigationComponent} from "./navigation.component";
import {BrowserModule} from "@angular/platform-browser";
import {HomeModule} from "../routes/home/home.module";
import {UserModule} from "../routes/user/user.module";

@NgModule({
  declarations: [
    NavItemComponent,
    NavigationComponent,
  ],
  imports: [
    RouterModule.forRoot(NAV_ROUTES),
    BrowserModule,

    // Routes
    HomeModule,
    UserModule,
  ],
  exports: [
    RouterModule,
    NavigationComponent,
  ],
  providers: [],
})
export class RoutingModule {
}
