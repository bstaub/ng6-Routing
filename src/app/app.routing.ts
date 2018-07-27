import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user/user.component';
import {HomeComponent} from './home.component';

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'user', component: UserComponent},
];

export const MyRouting = RouterModule.forRoot(APP_ROUTES);
