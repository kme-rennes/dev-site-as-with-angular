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
    // get hero when `id` param changes
    const id =  this.route.snapshot.params['id'];
    this.getArticle(id);
  }

  private getArticle(id: string): void {
    if (!id) {
      this.article = new Article();
      return;
    }

    this.articleService.getArticle(Number(id))
      .subscribe(article => {
        console.log(article);
        if (article) {
          this.article = article;
        } else {
          this.gotoList(); // id not found; navigate to list
        }
      });
  }


  save(): void {
    this.articleService.updateArticle(this.article);
  }

  cancel() { this.gotoList(); }
  gotoList() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
