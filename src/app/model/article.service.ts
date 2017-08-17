import { Injectable } from '@angular/core';
import { Article} from './article';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ArticleService {

  results: Article[];
  constructor(private http: Http) { }

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private articlesUrl = './assets/articles.json';

  getArticles(): Observable<Article[]> {
    return this.http.get(this.articlesUrl)
      .map(response => response.json())
      .catch(this.handleError);
  }


  getArticle(id: number): Observable<Article> {
    console.log('service');
    const url = `${this.articlesUrl}/${id}`;
    console.log('before return');
    const art = this.http.get(url)
      .map(response => response.json().data as Article)
    console.log(art);
    return this.http.get(url)
      .map(response => response.json().data as Article)
      .catch(this.handleError);
  }


  createArticle(article: Article): Observable<Article> {
    return this.http
      .post(this.articlesUrl, JSON.stringify(article), { headers: this.headers })
      .map(res => res.json().data as Article)
      .catch(this.handleError);
  }

  updateArticle(article: Article): Observable<Article> {
    const url = `${this.articlesUrl}/${article.id}`;
    return this.http
      .put(url, JSON.stringify(article), { headers: this.headers })
      .map(() => article)
      .catch(this.handleError);
  }

  deleteArticle(article: Article): Observable<void> {
    const url = `${this.articlesUrl}/${article.id}`;
    return this.http.delete(url, { headers: this.headers })
      .map(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
