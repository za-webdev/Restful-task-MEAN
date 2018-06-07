import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'; //helps query our data from database service use this/make API calls 
import {HttpService} from './http.service';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [              // all the modules goes in imports
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpService],  //all services goes in providers
  bootstrap: [AppComponent]
})
export class AppModule { }
