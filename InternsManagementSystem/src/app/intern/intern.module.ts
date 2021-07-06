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
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProgressComponent } from './progress/progress.component';


@NgModule({
  declarations: [
    HomeComponent,
    GetInternComponent,
    HeaderComponent,
    ApplyInternComponent,
    InternDetailsComponent,
    ProgressComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    ModalModule.forRoot()

  ],
  exports: [ 
    HomeComponent,
    GetInternComponent,
    HeaderComponent,
    ApplyInternComponent,
    ProgressComponent,

  ],
  providers: [InternsService

  ]
})
export class InternModule { }
