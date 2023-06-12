import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  mainMenuArray = [
    {display: 'home', routerLink: ''},
    {display: 'about us', routerLink: 'about-us'},
    // {display: 'admin', routerLink: 'admin'}
  ]

}
