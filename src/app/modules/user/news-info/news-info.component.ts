import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INewsInfo } from '@app/shared/interfaces/news-info/inews-info';
import {Location} from '@angular/common';

@Component({
  selector: 'app-news-info',
  templateUrl: './news-info.component.html',
  styleUrls: ['./news-info.component.scss']
})
export class NewsInfoComponent implements OnInit {
  newsInfo: INewsInfo;

  constructor(private location: Location, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.newsInfo = JSON.parse(localStorage.getItem('newsInfo'));
  }

  backToPreviousPage() {
    this.location.back();
  }
}
