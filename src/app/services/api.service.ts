import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiKey = 'b0e9db0ae1mshc64e7704b422f95p1edce5jsnb69b81a2286f'

  constructor(private http: HttpClient) {}

  getMovieNames() {
    let headers = new HttpHeaders().set('X-RapidAPI-Key', this.apiKey).set('X-RapidAPI-Host', 'imdb-top-100-movies.p.rapidapi.com');

    return this.http.get<any>('https://imdb-top-100-movies.p.rapidapi.com/', {headers})
  }
}
