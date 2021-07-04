import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ HttpClientModule}from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { GetInternComponent } from './get-intern/get-intern.component';
import { HeaderComponent } from './header/header.component';
import { ApplyInternComponent } from './apply-intern/apply-intern.component'
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { InternsService } from './services/interns.service';
import { InternDetailsComponent } from './intern-details/intern-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    HomeComponent,
    GetInternComponent,
    HeaderComponent,
    ApplyInternComponent,
    InternDetailsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  exports: [ 
    HomeComponent,
    GetInternComponent,
    HeaderComponent,
    ApplyInternComponent,
  ],
  providers: [InternsService

  ]
})
export class InternModule { }
