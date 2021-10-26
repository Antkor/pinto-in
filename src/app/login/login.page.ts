import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private menu: MenuController, private router: Router) {}

  ngOnInit() {
    this.menu.enable(false);
  }

  login() {
    localStorage.setItem('user', 'antonis');
    this.router.navigateByUrl('/home');
  }
}
