import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {ConsumeterCommonModule} from "../../common/consumeter-common.module";

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [ConsumeterCommonModule],
  exports: [HomeComponent],
  providers: [],
})
export class HomeModule {

}
