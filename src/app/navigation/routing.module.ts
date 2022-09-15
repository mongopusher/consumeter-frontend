import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {APP_ROUTES} from "./routes.constant";
import {NavItemComponent} from "./nav-item/nav-item.component";
import {UserNavigationComponent} from "./user-navigation.component";
import {BrowserModule} from "@angular/platform-browser";
import {HomeModule} from "../routes/home/home.module";
import {UserModule} from "../routes/user/user.module";
import {UserGuard} from "../guards/UserGuard";

@NgModule({
  declarations: [
    NavItemComponent,
    UserNavigationComponent,
  ],
  imports: [
    RouterModule.forRoot(APP_ROUTES),
    BrowserModule,

    // Routes
    HomeModule,
    UserModule,
  ],
  exports: [
    RouterModule,
    UserNavigationComponent,
  ],
  providers: [
    UserGuard,
  ],
})
export class RoutingModule {
}
