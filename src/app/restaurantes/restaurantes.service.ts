import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Restaurante} from './restaurante/restaurante.model';

import {MEAT_API} from '../app.api';
import {ErrorHandler} from '../app.error-handler';

@Injectable()
export class RestaurantesService{

 constructor(private http: Http){}

  restaurantes(): Observable<Restaurante[]>{
    return this.http.get(`${MEAT_API}/restaurantes`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError);
  }
}
