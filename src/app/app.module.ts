import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {UserDetailComponent} from './user/user-detail.component';
import {UserEditComponent} from './user/user-edit.component';
import {MyRouting} from './app.routing';
import {HomeComponent} from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailComponent,
    UserEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MyRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
