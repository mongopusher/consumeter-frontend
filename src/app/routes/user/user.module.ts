import {NgModule} from "@angular/core";
import {UserSettingsComponent} from "./user-settings.component";
import {UserService} from "./user.service";
import {ConsumeterCommonModule} from "../../common/consumeter-common.module";
import {LoginComponent} from "./login.component";

@NgModule({
  declarations: [
    UserSettingsComponent,
    LoginComponent,
  ],
  imports: [
    ConsumeterCommonModule
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
