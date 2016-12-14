import { Component, OnInit } 	from '@angular/core';
import { Router } 						from '@angular/router';

import { HeroService } 	from './hero.service';
import { Hero } 				from './hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
	heroes: Hero[];
	selectedHero: Hero;

	constructor(
		private heroService: HeroService,
		private router: Router
	) { }

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

	getHeroes(): void {
		this.heroService.getHeroes()
			.then(heroes => this.heroes = heroes);
	}

	ngOnInit(): void {
		this.getHeroes();
	}

	gotoDetail(): void {
		this.router.navigate(['/heroes', this.selectedHero.id]);
	}
}
