export class Article {
  constructor(public id = 0, public name = '', public contenu = '', public urlImage = '') { }
  clone() { return new Article(this.id, this.name, this.contenu, this.urlImage); }
}
