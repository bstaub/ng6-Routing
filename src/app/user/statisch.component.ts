import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  template: `
    <div class="row">
      <div class="col-xs-12">
        <h2>User Statisch Seite</h2>
        <button class="btn btn-primary" (click)="onNavigage()">Zur Startseite</button>
      </div>
    </div>
  `
})
export class StatischComponent {

  constructor(private router: Router) {}

  onNavigage() {
    this.router.navigate(['/']);
  }
}
