import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { HeroSearchService } from './hero-search.service';
import { Hero } from './hero';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss'],
  providers: [HeroSearchService]
})

export class HeroSearchComponent implements OnInit {
	heroes: Observable<Hero[]>;
	private searchTerms = new Subject<string>();

	constructor(
		private heroSearchService: HeroSearchService,
		private router: Router
	) { }

	search(term: string): void {
		this.searchTerms.next(term);
	}

	ngOnInit(): void {
		this.heroes = this.searchTerms
			.debounceTime(300)
			.distinctUntilChanged()
			.switchMap(term => term
				? this.heroSearchService.search(term)
				: Observable.of<Hero[]>([]))
			.catch(error => {
				console.log(error);
				return Observable.of<Hero[]>([]);
			})
	}

	gotoDetail(hero: Hero): void {
		let link = ['/heroes', hero.id];
		this.router.navigate(link);
	}
}