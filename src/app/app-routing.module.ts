import { NgModule }							from '@angular/core';
import { RouterModule, Routes }	from '@angular/router';

import { DashboardComponent }		from './dashboard/dashboard.component';
import { HeroListComponent }		from './heroes/hero-list.component';
import { HeroDetailComponent }		from './heroes/hero-detail.component';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', 	component: DashboardComponent },
	{ path: 'heroes/:id', component: HeroDetailComponent },
	{ path: 'heroes', 		component: HeroListComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}