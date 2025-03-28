import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(public router:Router){}
  isLogin = signal<boolean>(false);

  GoLogin(){

    this.router.navigate(['login']);

  }
}
