import {Component, Input, OnInit} from '@angular/core';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {
  @Input() route!: Route;


  constructor(public router: Router) {
  }

  ngOnInit(): void {
  }

}
