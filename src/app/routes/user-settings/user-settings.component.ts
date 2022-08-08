import {Component, Inject} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "./user.service";

@Component({
  selector: 'user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent {
  public userSettings: FormGroup;

  public constructor(@Inject(FormBuilder) private formBuilder: FormBuilder,
                     @Inject(UserService) private userService: UserService) {
    this.userSettings = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

    void this.load();
  }

  public async load(): Promise<void> {
    const loadedUserSettings = await this.userService.loadUser();

    if (loadedUserSettings !== undefined) {
      this.userSettings.patchValue(loadedUserSettings.user);
    }
  }

  public async save(): Promise<void> {
    const controls = Object.values(this.userSettings.controls);
    for (let control of controls) {
      if (control.errors) {
        console.error('validaton errors: ', control.errors);
      }
    }

    const updateUserDto = this.userSettings.value;
    await this.userService.updateUser(updateUserDto);
  }
}
