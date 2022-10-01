import {Component, OnInit,} from "@angular/core";


@Component({
  selector: 'growl-message',
  templateUrl: 'growl-message.component.html',
  styleUrls: ['growl-message.component.scss'],
})
export class GrowlMessageComponent implements OnInit {
  public isAtEndPosition: boolean;

  public messageText?: string;

  public constructor() {
    this.isAtEndPosition = false;
  }

  public ngOnInit(): void {
    setTimeout(() => {
      this.isAtEndPosition = true;
    }, 200)

    setTimeout(() => {
      this.remove();
    }, 8000)
  }

  public remove(): void {
    this.isAtEndPosition = false;
  }

  public setData(data: any): void {
    this.messageText = data.message;
  }
}
