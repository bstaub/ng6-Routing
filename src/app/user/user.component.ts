import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  template: `
    <div class="row">
      <div class="col-xs-12">
        <h2>Dein Account</h2>
        <p>{{ id }}</p>
        <button class="btn btn-primary" (click)="onNavigage()">Zur Startseite</button>
        <hr>
        <a [routerLink]="['detail']" routerLinkActive="active">Detail</a> | 
        <a [routerLink]="['edit']" routerLinkActive="active">Edit</a>
        <hr>
        <router-outlet></router-outlet>
      </div>
      
      
    </div>
  `,
  styles: [`
    .active{
      color: green;
    }
  `]
})
export class UserComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  id: string;

  constructor(private router: Router, private actvatedRoute: ActivatedRoute) {
  }

  onNavigage() {
    this.router.navigate(['/'], {queryParams: {'token': 100}, fragment: 'anchor1'});
  }

  ngOnInit() {
    // this.id = this.actvatedRoute.snapshot.params['id'];  // gut wenn wir wissen das Komponente jeweils neu erstellt wird.
    this.subscription = this.actvatedRoute.params.subscribe(
      (params: Params) => this.id = params['id']
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
