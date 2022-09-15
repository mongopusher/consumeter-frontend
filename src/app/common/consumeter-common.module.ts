import {NgModule} from "@angular/core";
import {TextInputComponent} from "./text-input/text-input.component";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {NumberInputComponent} from "./number-input/number-input.component";
import {FormErrorComponent} from "./form-error/form-error.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    TextInputComponent,
    NumberInputComponent,
    FormErrorComponent,
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  exports: [
    ReactiveFormsModule,
    TextInputComponent,
    NumberInputComponent,
    FormErrorComponent,
  ],
})
export class ConsumeterCommonModule {
}
