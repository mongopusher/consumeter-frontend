import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ViewComponent} from './view/view.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {RoutingModule} from "./navigation/routing.module";
import {AuthInterceptor} from "./shared/auth/auth.interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthModule} from "./shared/auth/auth.module";

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    RoutingModule,
    AuthModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
