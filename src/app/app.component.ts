import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
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
  constructor(private router: Router, private menu: MenuController) {}

  logout() {
    localStorage.removeItem('user');
    this.menu.close();
    this.router.navigateByUrl('login');
  }
}
