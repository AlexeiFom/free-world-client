import { Component, OnInit } from '@angular/core';
import { NewsService } from '@app/shared/services/news.service';
import { INews } from '@app/shared/interfaces/news/inews';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news: INews;
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getAllNews()
      .subscribe(data => {
        this.news = data;
        this.news.articles = data.articles;
      })
  }
}
