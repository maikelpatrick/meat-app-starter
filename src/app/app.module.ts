import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ROUTES} from './app.routes'

import { AppComponent } from './app.component';
import { HeardComponent } from './heard/heard.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestauranteComponent } from './restaurantes/restaurante/restaurante.component';
import { RestaurantesService } from './restaurantes/restaurantes.service';



@NgModule({
  declarations: [
    AppComponent,
    HeardComponent,
    HomeComponent,
    AboutComponent,
    RestaurantesComponent,
    RestauranteComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestaurantesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
