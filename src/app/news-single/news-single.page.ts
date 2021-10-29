import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.page.html',
  styleUrls: ['./news-single.page.scss'],
})
export class NewsSinglePage implements OnInit {
  public newsItem;

  constructor(private router: Router, private navCtrl: NavController) {
    this.newsItem = this.router.getCurrentNavigation().extras.state.newsItem;
  }

  ngOnInit() {
    console.log(this.newsItem);
  }

  goBack() {
    this.navCtrl.navigateBack('news');
  }
}
