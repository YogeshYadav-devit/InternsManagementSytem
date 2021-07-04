import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormGroup ,FormBuilder } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InternModule } from './intern/intern.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InternModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
