import {NgModule} from "@angular/core";
import {TextInputComponent} from "./text-input/text-input.component";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {NumberInputComponent} from "./number-input/number-input.component";
import {FormErrorComponent} from "./form-error/form-error.component";
import {CommonModule} from "@angular/common";
import {GrowlMessageComponent} from "./growls/growl-message.component";
import {GrowlService} from "./growls/growl.service";

@NgModule({
  declarations: [
    TextInputComponent,
    NumberInputComponent,
    FormErrorComponent,
    GrowlMessageComponent,
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [
    GrowlService,
  ],
  exports: [
    ReactiveFormsModule,
    TextInputComponent,
    NumberInputComponent,
    FormErrorComponent,
    GrowlMessageComponent,
  ],
})
export class ConsumeterCommonModule {
}
