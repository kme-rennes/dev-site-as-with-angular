"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hero_1 = require("./hero");
var Team3_1 = require("./Team3");
var Article_1 = require("./Article");
exports.HEROES = [
    new hero_1.Hero(11, 'Mr. Nice'),
    new hero_1.Hero(12, 'Narco'),
    new hero_1.Hero(13, 'Bombasto'),
    new hero_1.Hero(14, 'Celeritas'),
    new hero_1.Hero(15, 'Magneta'),
    new hero_1.Hero(16, 'RubberMan')
];
exports.TEAM3S = [
    new Team3_1.Team3(11, 'Kevin'),
    new Team3_1.Team3(12, 'Pierre'),
    new Team3_1.Team3(13, 'Guillaume'),
    new Team3_1.Team3(14, 'Mathis'),
    new Team3_1.Team3(15, 'Marion'),
    new Team3_1.Team3(16, 'Luciana'),
    new Team3_1.Team3(17, 'Estelle'),
    new Team3_1.Team3(18, 'Carole')
];
exports.ARTICLES = [
    new Article_1.Article(11, 'Kevin', 'test', 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png'),
    new Article_1.Article(12, 'Pierre', 'test', 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png')
];
//# sourceMappingURL=test-heroes.js.map