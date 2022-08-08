import {NgModule} from "@angular/core";
import {TextInputComponent} from "./text-input/text-input.component";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {NumberInputComponent} from "./number-input/number-input.component";

@NgModule({
  declarations: [TextInputComponent, NumberInputComponent],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [
    ReactiveFormsModule,
    TextInputComponent,
    NumberInputComponent,
  ],
})
export class CommonModule {
}
