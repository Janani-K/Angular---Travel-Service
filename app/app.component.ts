import { Component } from '@angular/core';
import { NavigationLinks } from './navigation-links';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  subHeading = 'Chennai';
  // links = ['Home','Catalog','Payment','Contact']

  // links: NavigationLinks[] = 
  // [{text:"Home",link:"/"},
  // {text:"Catolog",link:"catalog.html"},
  // {text:"Payment",link:"payment.html"},
  // {text:"Contact",link:"contact.html"}]

  links: NavigationLinks[] = 
  [{text:"Home",link:"/search"},
  {text:"Catalog",link:"/show"}]
}
