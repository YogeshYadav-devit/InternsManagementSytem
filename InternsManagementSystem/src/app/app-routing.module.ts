import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyInternComponent } from './intern/apply-intern/apply-intern.component';
import { GetInternComponent } from './intern/get-intern/get-intern.component';
import { InternDetailsComponent } from './intern/intern-details/intern-details.component';
import { ProgressComponent } from './intern/progress/progress.component';

const routes: Routes = [
  {path:'',redirectTo:'interns/add', pathMatch: 'full' },
  {path: 'interns/add', component:ApplyInternComponent},
  {path: 'interns', component:GetInternComponent},
  {path:'interns/:id', component:InternDetailsComponent},
  {path:'interns/:id/progress', component:ProgressComponent}
  
  // { path: 'crud', redirectTo: 'crud/home', pathMatch: 'full'},
  // { path: 'crud/home', component: HomeComponent },
  // { path: 'crud/details/:productId', component: DetailsComponent },
  // { path: 'crud/create', component: CreateComponent },
  // { path: 'crud/update/:productId', component: UpdateComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
