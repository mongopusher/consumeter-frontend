import {NgModule} from "@angular/core";
import {UserSettingsComponent} from "./user-settings.component";
import {UserService} from "./user.service";
import {CommonModule} from "../../common/common.module";

@NgModule({
  declarations: [
    UserSettingsComponent,
  ],
  imports: [CommonModule],
  exports: [UserSettingsComponent],
  providers: [UserService],
})
export class UserModule {
}
