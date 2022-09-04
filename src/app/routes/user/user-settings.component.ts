import {Component, Inject} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "./user.service";

@Component({
  selector: 'user',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent {
  public usernameFormcontrol: FormControl;
  public emailFormcontrol: FormControl;
  public passwordFormcontrol: FormControl;
  public userSettings: FormGroup;

  public constructor(@Inject(FormBuilder) private formBuilder: FormBuilder,
                     @Inject(UserService) private userService: UserService) {
    this.usernameFormcontrol = this.formBuilder.control('', [Validators.required])
    this.emailFormcontrol = this.formBuilder.control('', [Validators.required])
    this.passwordFormcontrol = this.formBuilder.control('', [Validators.required])

    this.userSettings = this.formBuilder.group({
      username: this.usernameFormcontrol,
      email: this.emailFormcontrol,
      password: this.passwordFormcontrol,
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
