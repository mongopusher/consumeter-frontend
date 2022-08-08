import {Component, forwardRef, Host, Input, OnInit} from "@angular/core";
import {ControlValueAccessor, FormControl, FormGroup, FormGroupDirective, NG_VALUE_ACCESSOR} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'text-input',
  templateUrl: 'text-input.component.html',
  styleUrls: ['text-input.component.scss'],
})
export class TextInputComponent implements OnInit {
  @Input()
  public id?: string;

  @Input()
  public label?: string;

  @Input()
  public formControl!: FormControl;

  public constructor() {
  }

  public ngOnInit(): void {
  }
}
