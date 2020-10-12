import { Component, OnInit } from '@angular/core';
import { NavbarService } from './services/navbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title$ = this.navbarService.title;

  constructor(
    private navbarService: NavbarService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  } 

  getRouter(): Router {
    return this.router;
  }

}