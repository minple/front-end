import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//add for ng-bootstrap
import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    //start. add components for using ng-bootstrap
    NgbdAlertCloseable
    //end. add components for using ng-bootstrap
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
