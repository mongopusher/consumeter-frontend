import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {CommonModule} from "../../common/common.module";

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [CommonModule],
  exports: [HomeComponent],
  providers: [],
})
export class HomeModule {

}
