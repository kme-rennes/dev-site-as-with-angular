import { Component, Input, OnInit } from '@angular/core';
import { Article} from '../../model/article';


import {  ArticleService} from '../../model/article.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {

  constructor(private route:  ActivatedRoute, private router: Router, private articleService: ArticleService) { }

  @Input() article: Article;

  ngOnInit() {
  console.log('test');
    // get hero when `id` param changes
    const id =  this.route.snapshot.params['id'];
    this.getArticle(id);
    console.log('id init');
  }

  private getArticle(id: string): void {
    // when no id or id===0, create new hero
    console.log('id get article');
    if (!id) {
      this.article = new Article();
      return;
    }

    const realId = Number(id);
    console.log('realid');
    this.articleService.getArticle(realId).map(article => {
      console.log('methode');
      if (article) {
        console.log('if');
        this.article = article;
      } else {
        console.log('else');
        this.gotoList(); // id not found; navigate to list
      }
    });
    console.log('realid2');
  }


  save(): void {
    this.articleService.updateArticle(this.article);
  }

  cancel() { this.gotoList(); }
  gotoList() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
