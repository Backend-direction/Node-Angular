import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-client';

  constructor( private router: Router) {

  }

  shouldShow() {
    return this.router.url === '/';
  }
}
