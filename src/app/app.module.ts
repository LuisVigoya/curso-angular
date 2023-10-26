
import { HeroesModule } from './heroes/heroes.module';
import { NgModule } from '@angular/core';

import { CounterModule } from './counter/counter.module';
import { BrowserModule } from '@angular/platform-browser';
import { DbzModule } from './dbz/dbz.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
