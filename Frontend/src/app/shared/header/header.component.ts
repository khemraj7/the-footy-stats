import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit(): void {

  }
  register() {
    this.router.navigateByUrl('/register')
  }

  login() {
    this.router.navigateByUrl('/login')
  }
  stats() {
    this.router.navigateByUrl('/stats')

  }
  matches() {
    this.router.navigateByUrl('/matches')

  } leagues() {
    this.router.navigateByUrl('/leagues')

  } predictions() {
    this.router.navigateByUrl('/predictions')

  }home(){
    this.router.navigateByUrl('/home')

  }
}
