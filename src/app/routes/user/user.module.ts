import {NgModule} from "@angular/core";
import {UserSettingsComponent} from "./user-settings.component";
import {UserService} from "./user.service";
import {ConsumeterCommonModule} from "../../common/consumeter-common.module";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

@NgModule({
  declarations: [
    UserSettingsComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    ConsumeterCommonModule
  ],
  exports: [
    UserSettingsComponent,
    LoginComponent,
    RegisterComponent,
  ],
  providers: [
    UserService
  ],
})
export class UserModule {
}
