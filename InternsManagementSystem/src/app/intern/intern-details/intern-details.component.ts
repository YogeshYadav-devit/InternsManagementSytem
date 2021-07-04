import { Component, OnInit } from '@angular/core';
import { InternsService } from '../services/interns.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalInternService } from '../services/local-intern.service';
import { Intern } from '../models/Intern';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-intern-details',
  templateUrl: './intern-details.component.html',
  styleUrls: ['./intern-details.component.css']
})
export class InternDetailsComponent implements OnInit {
internid !:string;
interndetails!:Intern;
  
  constructor( private InternsService : InternsService, private _route:ActivatedRoute,private router: Router,) { 


  }

  ngOnInit(): void {
    this.getInternId();
    this.showDetails();  
   }
  //get the intern id into the url 
 getInternId(){
  this._route.params.subscribe( params => this.internid= params.id);
  console.log( this.internid);
 }
  // fetch the intern data of particular intern id into the internService Method is getInternsById();
  showDetails(){
    this.InternsService.getInternsById(this.internid).subscribe(data => {this.interndetails= data}) ;
    console.log( this.interndetails.name)
  }

}
