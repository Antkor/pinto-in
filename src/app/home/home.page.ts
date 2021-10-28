import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public qrCodeType = NgxQrcodeElementTypes.CANVAS;
  public qrCodeValue = '20118702776';
  public correctionLevel = NgxQrcodeErrorCorrectionLevels.MEDIUM;

  constructor(private menu: MenuController) { }

  ngOnInit() {
    this.menu.enable(true);
  }

}
