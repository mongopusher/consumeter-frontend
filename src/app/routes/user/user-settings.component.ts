import {Component, Inject} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/auth/auth.service";

@Component({
  selector: 'user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent {
  public usernameFormcontrol: FormControl;
  public emailFormcontrol: FormControl;
  public passwordFormcontrol: FormControl;
  public userSettings: FormGroup;

  public constructor(@Inject(FormBuilder) private formBuilder: FormBuilder,
                     @Inject(AuthService) private authService: AuthService) {
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
    const loadedUserSettings = await this.authService.loadUser();

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
    await this.authService.updateUser(updateUserDto);
  }
}
