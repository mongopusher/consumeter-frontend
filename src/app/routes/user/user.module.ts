import {NgModule} from "@angular/core";
import {UserSettingsComponent} from "./user-settings.component";
import {UserService} from "./user.service";
import {CommonModule} from "../../common/common.module";
import {LoginComponent} from "./login.component";

@NgModule({
  declarations: [
    UserSettingsComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserSettingsComponent,
    LoginComponent,
  ],
  providers: [
    UserService
  ],
})
export class UserModule {
}
