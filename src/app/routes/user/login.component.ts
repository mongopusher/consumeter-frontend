import {Component, Inject} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "./user.service";
import {HttpErrorResponse, HttpStatusCode} from "@angular/common/http";
import {IUserResponse} from "./user-response.type";
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public usernameOrEmailFormcontrol: FormControl;
  public passwordFormcontrol: FormControl;
  public userSettings: FormGroup;
  public errorMessage: string;

  public constructor(@Inject(FormBuilder) private formBuilder: FormBuilder,
                     @Inject(UserService) private userService: UserService,
                     @Inject(Router) private router: Router) {
    this.errorMessage = '';
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

    try {
      const user = await this.userService.login(this.userSettings.value);
      this.reroute(user);
    } catch (error) {
      if (error instanceof HttpErrorResponse) {
        if (error.status === HttpStatusCode.Unauthorized) {
          console.log(error);
          this.errorMessage = error.error.message;
        }
      }
    }
  }

  private reroute(user: IUserResponse): void {
    if (user !== undefined) {
      void this.router.navigate(['home'])
    }
  }
}
