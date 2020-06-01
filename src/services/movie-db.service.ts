import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MovieDbService {

  url = 'https://api.themoviedb.org/3/';
  apiKey = '993c09bd77de23e64d7810d4a77c748a';

  constructor(private http: HttpClient) { }

  buildHttpParams(query) {
    let httpParams = new HttpParams();
    Object.keys(query).forEach(item => {
      httpParams = httpParams.append(item, query[item]);
    });
    return httpParams = httpParams.set('api_key', this.apiKey);
  }

  getPopularMovies() {
    let params: HttpParams;
    params = this.buildHttpParams({});
    return this.http.get(`${this.url}movie/popular`, { params }).toPromise();
  }
  getByName(query): Promise<any> {
    let params: HttpParams;
    params = this.buildHttpParams(query);
    return this.http.get(`${this.url}search/movie`, { params }).toPromise();
  }
  getById(id): Promise<any> {
    let params: HttpParams;
    params = this.buildHttpParams({});
    return this.http.get(`${this.url}movie/${id}`, { params }).toPromise();
  }
  getCredits(id): Promise<any> {
    let params: HttpParams;
    params = this.buildHttpParams({});
    return this.http.get(`${this.url}movie/${id}/credits`, { params }).toPromise();
  }
}

