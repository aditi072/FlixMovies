import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  // baseUrl: string;
  // apiKey: string;
  // language: string;
  // region: string;

  constructor(private http: HttpClient) {
    // environment.baseUrl = 'https://api.themoviedb.org/3/';
    // environment.apiKey = 'dd4d819639705d332d531217b4f7c6b6';
    // environment.language = 'en-US';
    // environment.region = 'US';
  }
   
  // list of movies in theatres
  getNowPlaying(page: number): Observable<any> {
    // tslint:disable-next-line: max-line-length
    return this.http.get(`${environment.baseUrl}movie/now_playing?api_key=${environment.apiKey}&page=${page}&language=${environment.language}&region=${environment.region}`);
  }

  searchMovies(searchStr: string): Observable<any> {
    return this.http.get(`${environment.baseUrl}search/movie?api_key=${environment.apiKey}&query=${searchStr}`);
  }

  getPopular(page: number): Observable<any> {
    // tslint:disable-next-line: max-line-length
    return this.http.get(`${environment.baseUrl}movie/popular?api_key=${environment.apiKey}&page=${page}&language=${environment.language}&region=${environment.region}`);
  }

  getUpComingMovies(page: number): Observable<any> {
    // tslint:disable-next-line: max-line-length
    return this.http.get(`${environment.baseUrl}movie/upcoming?api_key=${environment.apiKey}&page=${page}&language=${environment.language}&region=${environment.region}`);
  }

  getTopRatedMovies(page: number): Observable<any> {
    // tslint:disable-next-line: max-line-length
    return this.http.get(`${environment.baseUrl}movie/top_rated?api_key=${environment.apiKey}&page=${page}&language=${environment.language}&region=${environment.region}`);
  }

  getDiscoverMovies(): Observable<any> {
    return this.http.get(`${environment.baseUrl}discover/movie?api_key=${environment.apiKey}`);
  }

  getGenres(): Observable<any> {
    return this.http.get(`${environment.baseUrl}genre/movie/list?api_key=${environment.apiKey}&language=${environment.language}`);
  }

  getMoviesByGenre(id: string): Observable<any> {
    return this.http.get(`${environment.baseUrl}genre/${id}/movies?api_key=${environment.apiKey}`);
  }

  getMovie(id: string): Observable<any> {
    return this.http.get(`${environment.baseUrl}movie/${id}?api_key=${environment.apiKey}`);
  }

  getMovieReviews(id: string): Observable<any> {
    return this.http.get(`${environment.baseUrl}movie/${id}/reviews?api_key=${environment.apiKey}`);
  }

  getMovieCredits(id: string): Observable<any> {
    return this.http.get(`${environment.baseUrl}movie/${id}/credits?api_key=${environment.apiKey}`);
  }

  getBackdropsImages(id: string) {
    return this.http.get(`${environment.baseUrl}movie/${id}/images?api_key=${environment.apiKey}`);
  }

  getMovieVideos(id: string): Observable<any> {
    return this.http.get(`${environment.baseUrl}movie/${id}/videos?api_key=${environment.apiKey}`);
  }

  getRecomendMovies(id: string): Observable<any> {
    return this.http.get(`${environment.baseUrl}movie/${id}/recommendations?api_key=${environment.apiKey}`);
  }

  getPersonDetail(id: string): Observable<any> {
    return this.http.get(`${environment.baseUrl}person/${id}?api_key=${environment.apiKey}`);
  }

  getPersonExternalData(id: string) {
    return this.http.get(`${environment.baseUrl}person/${id}/external_ids?api_key=${environment.apiKey}`);
  }

  getPersonCast(id: string): Observable<any> {
    return this.http.get(`${environment.baseUrl}person/${id}/movie_credits?api_key=${environment.apiKey}`);
  }

}
