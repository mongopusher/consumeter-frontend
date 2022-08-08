import {Component, Input, OnInit} from "@angular/core";
import {FormControl, } from "@angular/forms";


@Component({
  selector: 'number-input',
  templateUrl: 'number-input.component.html',
  styleUrls: ['number-input.component.scss'],
})
export class NumberInputComponent implements OnInit {
  @Input()
  public id?: string;

  @Input()
  public placeholder?: string;

  @Input()
  public label?: string;

  @Input()
  public formControl!: FormControl;

  public constructor() {
  }

  public ngOnInit(): void {
  }
}
