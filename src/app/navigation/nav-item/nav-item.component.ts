import {Component, Input, OnInit} from '@angular/core';
import {TNavItem} from "./TNavItem";

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {
  @Input() navItem!: TNavItem;

  constructor() {
  }

  ngOnInit(): void {
  }

}