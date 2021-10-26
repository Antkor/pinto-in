import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'MyPintos', url: '/home', icon: 'qr-code' },
    { title: 'Stores', url: '/stores', icon: 'storefront' },
    { title: 'News', url: '/news', icon: 'newspaper' },
    { title: 'About', url: '/about', icon: 'information-circle' },
  ];
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('login');
  }
}
