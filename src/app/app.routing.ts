import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user/user.component';
import {HomeComponent} from './home.component';
import {StatischComponent} from './user/statisch.component';
import {USER_ROUTES} from './user/user.routes';

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'user/statisch', component: StatischComponent},
  {path: 'user/:id', component: UserComponent, children: USER_ROUTES },
  {path: '**', redirectTo: '/' },  // default Route, könnte auch 404 Seite sein, muss am Schluss aufgerufen werden
];

export const MyRouting = RouterModule.forRoot(APP_ROUTES);
