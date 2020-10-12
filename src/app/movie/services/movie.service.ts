import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Movie } from '../models/movie.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private ROOT_URL = "http://localhost:3000/movies";

  private movies$: Observable<Movie[]>;

  constructor(private http: HttpClient) { }

  getMoviesFromHttp(): Observable<Movie[]> {
    this.movies$ = this.http.get<Movie[]>(this.ROOT_URL); 
    return this.movies$;
  }

  movieFromHttp(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.ROOT_URL}/${id}`);
  }

  addMovie(movie: Movie) {
    return this.http.post(this.ROOT_URL, movie);
  }
}
