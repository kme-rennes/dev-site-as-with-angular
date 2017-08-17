import { Component, OnInit } from '@angular/core';
import { Article} from '../../model/article';
import {  ArticleService} from '../../model/article.service';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/takeLast';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/count';
import {Subject} from 'rxjs/Subject';


@Component({
  selector: 'app-liste-article',
  templateUrl: './liste-article.component.html',
  styleUrls: ['./liste-article.component.css']
})
export class ListeArticleComponent implements OnInit {

  articles: Observable<Article[]>;
  selectedArticle: Article;
  newArticle: Article;
  //page = 1;
  initialPage = 1;
  itemPerPage = 2;
  totalItems = 120;
  pageChange;
  page: Subject<number> = new Subject<number>();

  constructor(private router: Router, private articleService: ArticleService) {

  }


  ngOnInit() {

    console.log('per Page is' , this.itemPerPage);
    this.articles = Observable.combineLatest(
      this.articleService.getArticles(),
      this.page.debounceTime(100), this.page.startWith(this.initialPage),
      (articles, page) => {
        this.totalItems = Object.keys(articles).length;
        return articles.slice((page - 1) * this.itemPerPage, page * this.itemPerPage);
      }
    );
    //this.articlesPage = this.articles.skip((this.page - 1) * this.itemPerPage).take(this.itemPerPage);

    //this.articlesPage = this.articles.slice(  (this.page - 1) * this.itemPerPage , (this.page) * this.itemPerPage );

  }
  onSelect(article: Article) {
    this.selectedArticle = article;
    this.router.navigate(['../articles', this.selectedArticle.id ]);
  }
  onPager(event: number): void {
    console.log('Page event is' , event);

    console.log('item par page' , this.itemPerPage);
    //console.log('item dans la liste' , this.articlesPage);
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
