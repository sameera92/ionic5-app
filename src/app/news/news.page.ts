import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  items: any;
  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.getNews('top-headlines?country=us&category=business').subscribe(result => {
      this.items = result;
    });
  }

  gotoSinglePage(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);



  }

}
