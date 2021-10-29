import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { newsData } from '../common/data/newsData';
@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage {
  public newsData = newsData;

  constructor(private navCtrl: NavController) {}

  getItemText(text) {
    return text.substring(0, 140) + '...';
  }

  showDetails(newsItem) {
    this.navCtrl.navigateForward('news-single', {state: {newsItem}});
  }

}
