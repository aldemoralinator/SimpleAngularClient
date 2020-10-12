import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie.model';
import { Observable } from 'rxjs';
import { NavbarService } from 'src/app/navbar/services/navbar.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies$: Observable<Movie[]>;

  constructor(
    private movieService: MovieService,
    private navbarService: NavbarService
  ) { }

  ngOnInit(): void {
    this.movies$ = this.movieService.getMoviesFromHttp();
    this.navbarService.title.next("Movie List");
  }

}
