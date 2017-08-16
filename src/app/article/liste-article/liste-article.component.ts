import { Component, OnInit } from '@angular/core';
import { Article} from '../../model/article';
import {  ArticleService} from '../../model/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-article',
  templateUrl: './liste-article.component.html',
  styleUrls: ['./liste-article.component.css']
})
export class ListeArticleComponent implements OnInit {

  articles: Article[];
  selectedArticle: Article;
  newArticle: Article;
  page = 1;
  itemPerPage = 5;
  totalItems = 120;

  constructor(private router: Router, private articleService: ArticleService) {

  }


  ngOnInit() {
    this.articleService.getArticles().then(articles => this.articles = articles);
    this.newArticle = new Article();
  }
  onSelect(article: Article) {
    this.selectedArticle = article;
    this.router.navigate(['../articles', this.selectedArticle.id ]);
  }
  onPager(event: number): void {
    console.log('Page event is' , event);
    this.page = event;

    this.articleService.getArticles().then(articles => this.articles = articles);
  }

  getArticles(): void {
    this.articleService.getArticles().then(articles => this.articles = articles);
  }
  createArticle(article: Article): void {

    this.articleService.createArticle(article)
      .then(articles => {
        this.articles.push(articles);
        this.selectedArticle = null;
      });
  }

  deleteArticle(article: Article): void {
    this.articleService
      .deleteArticle(article)
      .then(() => {
        this.articles = this.articles.filter(b => b !== article);
        if (this.selectedArticle === article) { this.selectedArticle = null; }
      });
  }
}
