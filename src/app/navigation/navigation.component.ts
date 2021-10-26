import {Component, OnInit} from '@angular/core';
import {ROUTES} from '@angular/router';
import {TNavItem} from "./nav-item/TNavItem";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  routes: Array<TNavItem> = [
    {
      route: {},
      name: 'home',
      icon: 'home',
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
