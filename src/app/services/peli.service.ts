/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-trailing-spaces */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPelis } from '../models/IPelis.interface';

@Injectable({
  providedIn: 'root'
})
export class PeliService {

  private url: string = '';

  private apiKey: string = '8bbe5ec5';

  constructor(
    private http: HttpClient,
  ) { }

  //Método para buscar las películas dentro de la API
  searchMovies( title: string, type: string) {

    this.url = `http://www.omdbapi.com/?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`;
    console.log(this.url);

    return this.http.get<IPelis>(this.url).pipe(  map (
      results => results['Search']));
  }
  //Método para obtener los detalles de cada película
  getDetails(id: string) {
    return this.http.get<IPelis>(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
