import {Component, Inject} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "./user.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public usernameOrEmailFormcontrol: FormControl;
  public passwordFormcontrol: FormControl;
  public userSettings: FormGroup;


  public constructor(@Inject(FormBuilder) private formBuilder: FormBuilder,
                     @Inject(UserService) private userService: UserService) {
    this.usernameOrEmailFormcontrol = this.formBuilder.control('', [Validators.required])
    this.passwordFormcontrol = this.formBuilder.control('', [Validators.required])

    this.userSettings = this.formBuilder.group({
      usernameOrEmail: this.usernameOrEmailFormcontrol,
      password: this.passwordFormcontrol,
    });
  }

  public async login(): Promise<void> {
    const controls = Object.values(this.userSettings.controls);
    for (let control of controls) {
      if (control.errors) {
        console.error('validaton errors: ', control.errors);
      }
    }

    await this.userService.login(this.userSettings.value);
  }
}
