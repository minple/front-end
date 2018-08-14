import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//add module for using get, post, put, delete
import { HttpClientModule } from '@angular/common/http';

//start. add module for using the component of ng-bootstrap
import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
//end. add module for using the component of ng-bootstrap

//start. add components for using ng-bootstrap
import { NgbdAlertCloseable } from './components/modal-basic/modal-basic';
//end. add components for using ng-bootstrap

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    //start. add components for using ng-bootstrap
    NgbdAlertCloseable,
    //end. declare components for using ng-bootstrap
    PostsComponent,
    UsersComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //start. import module component for using ng-bootstrap
    NgbAlertModule,
    //end. import module component for using ng-bootstrap
    //import module for using get, post, put, delete
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
