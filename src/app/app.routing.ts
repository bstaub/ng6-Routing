import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user/user.component';
import {HomeComponent} from './home.component';
import {StatischComponent} from './user/statisch.component';

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'user/statisch', component: StatischComponent},
  {path: 'user/:id', component: UserComponent},
];

export const MyRouting = RouterModule.forRoot(APP_ROUTES);
