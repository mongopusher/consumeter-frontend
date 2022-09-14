import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {APP_ROUTES} from "./routes.constant";
import {NavItemComponent} from "./nav-item/nav-item.component";
import {NavigationComponent} from "./navigation.component";
import {BrowserModule} from "@angular/platform-browser";
import {HomeModule} from "../routes/home/home.module";
import {UserModule} from "../routes/user/user.module";
import {UserGuard} from "../guards/UserGuard";

@NgModule({
  declarations: [
    NavItemComponent,
    NavigationComponent,
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
    NavigationComponent,
  ],
  providers: [
    UserGuard,
  ],
})
export class RoutingModule {
}
