import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }         from './app.component';
import { HeroDetailComponent }  from './heroes/hero-detail.component';
import { HeroListComponent }    from './heroes/hero-list.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroService }          from './heroes/hero.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroListComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
