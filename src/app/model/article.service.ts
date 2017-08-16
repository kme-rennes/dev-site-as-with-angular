import { Injectable } from '@angular/core';
import { Article} from './article';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ArticleService {

  results: Article[];
  constructor(private http: Http) { }

  private headers = new Headers({ 'Content-Type': 'application/json' });
  //private articlesUrl = 'api/bikes';
  private articlesUrl = './assets/articles.json';

  getArticles(): Promise<Article[]> {
    return this.http.get(this.articlesUrl)
      .toPromise()
      .then(response => response.json().data as Article[])
      .catch(this.handleError);
  }


  getArticle(id: number): Promise<Article> {
    const url = `${this.articlesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Article)
      .catch(this.handleError);
  }


  createArticle(article: Article): Promise<Article> {
    return this.http
      .post(this.articlesUrl, JSON.stringify(article), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as Article)
      .catch(this.handleError);
  }

  updateArticle(article: Article): Promise<Article> {
    const url = `${this.articlesUrl}/${article.id}`;
    return this.http
      .put(url, JSON.stringify(article), { headers: this.headers })
      .toPromise()
      .then(() => article)
      .catch(this.handleError);
  }

  deleteArticle(article: Article): Promise<void> {
    const url = `${this.articlesUrl}/${article.id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
