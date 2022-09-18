import {Component, forwardRef, Host, Input, OnDestroy, OnInit} from "@angular/core";
import {ControlValueAccessor, FormControl, FormGroup, FormGroupDirective, NG_VALUE_ACCESSOR} from "@angular/forms";
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'text-input',
  templateUrl: 'text-input.component.html',
  styleUrls: ['text-input.component.scss'],
})
export class TextInputComponent implements OnInit, OnDestroy {
  @Input()
  public id?: string;

  @Input()
  public label?: string;

  @Input()
  public formControl!: FormControl;

  @Input()
  public isPassword = false;

  public labelClassList: Array<string>;

  private subscription?: Subscription;

  public constructor() {
    this.labelClassList = ['unfocused'];
  }

  public ngOnInit(): void {
    this.subscription = this.formControl.valueChanges.subscribe(() => {
      this.labelClassList = [];
    });
  }

  public ngOnDestroy() {
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }
  }

  public onFocusIn(): void {
    this.labelClassList = [];
  }

  public onFocusOut(): void {
    if (this.formControl.value === '') {
      this.labelClassList = ['unfocused'];
    }
  }
}
