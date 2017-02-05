import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';

import { SearchService } from './search.service';

import { routing } from './app.route';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  providers: [ SearchService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

