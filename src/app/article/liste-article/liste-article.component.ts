import { Component, OnInit } from '@angular/core';
import { Article} from '../../model/article';
import {  ArticleService} from '../../model/article.service';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-liste-article',
  templateUrl: './liste-article.component.html',
  styleUrls: ['./liste-article.component.css']
})
export class ListeArticleComponent implements OnInit {

  articles: Observable<Article[]>;
  articlesPage: Observable<Article[]>;
  selectedArticle: Article;
  newArticle: Article;
  page = 1;
  itemPerPage = 2;
  totalItems = 120;

  constructor(private router: Router, private articleService: ArticleService) {

  }


  ngOnInit() {
    this.articles = this.articleService.getArticles();
    this.articlesPage = this.articles.skip((this.page - 1) * this.itemPerPage ).take(this.itemPerPage);

    //this.articlesPage = this.articles.slice(  (this.page - 1) * this.itemPerPage , (this.page) * this.itemPerPage );

  }
  onSelect(article: Article) {
    this.selectedArticle = article;
    this.router.navigate(['../articles', this.selectedArticle.id ]);
  }
  onPager(event: number): void {
    console.log('Page event is' , event);
    this.page = event;
    this.articlesPage = this.articles.skip((this.page - 1) * this.itemPerPage ).take(this.itemPerPage);

    console.log('tab' , this.articlesPage.count());
    //this.articleService.getArticles().then(articles => this.articles = articles);

  }

  getArticles(): void {
    this.articles = this.articleService.getArticles();
  }
  createArticle(article: Article): void {

    //this.articleService.createArticle(article)
      //.then(articles => {
       // this.articles.push(articles);
       // this.selectedArticle = null;
      //});
  }

  deleteArticle(article: Article): void {
    //this.articleService
     // .deleteArticle(article)
     // .then(() => {
      //  this.articles = this.articles.filter(b => b !== article);
      //  if (this.selectedArticle === article) { this.selectedArticle = null; }
      //});
  }
}
