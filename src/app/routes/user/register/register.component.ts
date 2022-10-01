import {Component, Inject} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../user.service";
import {HttpErrorResponse, HttpStatusCode} from "@angular/common/http";
import {IUserResponse} from "../user-response.type";
import {Router} from "@angular/router";
import {GrowlService} from "../../../common/growls/growl.service";

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public usernameFormControl: FormControl;
  public emailFormControl: FormControl;
  public passwordFormControl: FormControl;
  public register: FormGroup;
  public errorMessage: string;

  public constructor(@Inject(FormBuilder) private formBuilder: FormBuilder,
                     @Inject(UserService) private userService: UserService,
                     @Inject(GrowlService) private growlService: GrowlService,
                     @Inject(Router) private router: Router) {
    this.errorMessage = '';
    this.usernameFormControl = this.formBuilder.control('', [Validators.required])
    this.emailFormControl = this.formBuilder.control('', [Validators.required])
    this.passwordFormControl = this.formBuilder.control('', [Validators.required])

    this.register = this.formBuilder.group({
      username: this.usernameFormControl,
      email: this.emailFormControl,
      password: this.passwordFormControl,
    });
  }

  public async createUser(): Promise<void> {
    const controls = Object.values(this.register.controls);
    for (let control of controls) {
      if (control.errors) {
        console.error('validation errors: ', control.errors);
      }
    }

    try {
      const user = await this.userService.createUser(this.register.value);
      this.reroute(user);
    } catch (error) {
      if (error instanceof HttpErrorResponse) {
        this.growlService.createGrowlMessage(error.error.message);
      }
    }
  }

  private reroute(user: IUserResponse): void {
    if (user !== undefined) {
      void this.router.navigate(['home'])
    }
  }
}
