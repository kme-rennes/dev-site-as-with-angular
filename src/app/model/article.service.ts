import { Injectable } from '@angular/core';
import { Article} from './article';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ArticleService {

  results: Article[];
  // buffer qui va stocker la dernière version de la liste des articles
  // les components et les autres services peuvent s'y abonner
  private articles: ReplaySubject<Article[]> = new ReplaySubject<Article[]>(1);

  constructor(private http: Http) { }

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private articlesUrl = './assets/articles.json';


  loadArticles(): Observable<Article[]> {
    return this.http.get(this.articlesUrl)
      .map(response => {
        const res = response.json();
        this.articles.next(res);
        return res;
      })
      .catch(this.handleError);
  }
  getArticles(): Observable<Article[]> {
    return this.articles;
  }


  getArticle(id: number): Observable<Article> {
    //const url = `${this.articlesUrl}/${id}`;
    //return this.http.get(url).map(response => response.json().data as Article)
      //.catch(this.handleError);

    return this.articles.map(articles =>  {
      return articles.find(article => article.id === id);
    })
    .catch(this.handleError);
  }


  createArticle(article: Article): Observable<Article> {
    // on récupère la dernière liste des articles dans le buffer et on la met à jour pour propager cette opération
    // le take(1) est là pour éviter une boucle infinie
    this.articles.take(1).subscribe(articles => {
      articles.push(article);
      this.articles.next(articles);
    });
    return this.http
      .post(this.articlesUrl, JSON.stringify(article), { headers: this.headers })
      .map(res => res.json().data as Article)
      .catch(this.handleError);
  }

  updateArticle(article: Article): Observable<Article> {
    this.articles.take(1).subscribe(articles => {
      const index = this.articles.findIndex(a => a.id === article.id);
      if (index !== -1) {
        articles[index] = article;
        this.articles.next(articles);
      }});
    const url = `${this.articlesUrl}/${article.id}`;
    return this.http
      .put(url, JSON.stringify(article), { headers: this.headers })
      .map(() => article)
      .catch(this.handleError);
  }

  deleteArticle(article: Article): Observable<void> {
    this.articles.take(1).subscribe(articles => {
      const index = this.articles.findIndex(a => a.id === article.id);
      if (index !== -1) {
        articles.splice(index, 1);
        this.articles.next(articles);
      }});
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
