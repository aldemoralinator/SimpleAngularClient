import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavbarService } from 'src/app/navbar/services/navbar.service';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  movieForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    genre: new FormControl('', [Validators.required]),
    releaseYear: new FormControl('', [Validators.required])
  });

  constructor(
    private router: Router,
    private navbarService: NavbarService,
    private movieService: MovieService 
  ) { }

  ngOnInit(): void {
    this.navbarService.title.next('Add Movies');
  }

  addMovie(): void {
    this.movieService.addMovie(this.movieForm.value).subscribe(
      res => {
        this.movieForm.reset();
        this.router.navigate(['/']);
      }
    )
  }

}
