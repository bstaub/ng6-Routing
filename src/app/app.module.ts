import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {UserDetailComponent} from './user/user-detail.component';
import {UserEditComponent} from './user/user-edit.component';
import {MyRouting} from './app.routing';
import {HomeComponent} from './home.component';
import {HeaderComponent} from './header.component';
import {StatischComponent} from './user/statisch.component';
import {UserDetailGuard} from './user/user-detail.guard';
import {UserEditGuard} from './user/user-edit.guard';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailComponent,
    UserEditComponent,
    HomeComponent,
    HeaderComponent,
    StatischComponent
  ],
  imports: [
    BrowserModule,
    MyRouting,
  ],
  providers: [UserDetailGuard, UserEditGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
