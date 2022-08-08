import {Component, Inject} from "@angular/core";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public articleFormGroup: FormGroup;
  public articleNameFormControl: FormControl;
  public articlePriceFormControl: FormControl;

  public constructor(@Inject(FormBuilder) private formBuilder: FormBuilder) {
    this.articleNameFormControl = this.formBuilder.control('');
    this.articlePriceFormControl = this.formBuilder.control(undefined);
    this.articleFormGroup = this.formBuilder.group(this.articleNameFormControl);

    this.articleFormGroup.valueChanges.subscribe(console.log);
  }

  public async save(): Promise<void> {

  }
}
