import { Component, OnInit } from '@angular/core';
import { Intern } from '../models/Intern';
import {status}from '../enums/status.enum';
import { InternsService } from '../services/interns.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-get-intern',
  templateUrl: './get-intern.component.html',
  styleUrls: ['./get-intern.component.css']
})
export class GetInternComponent implements OnInit {
  selectedStatus:any;
  status= status;
  
  lstInterns:Intern[]=[];

  constructor( private router: Router, private InternsService : InternsService,private activatedRoute:ActivatedRoute  ) 
  {  
    this.getInterns();    
  }

  ngOnInit(): void {
  }

  // get the intern record into the intern service 
  getInterns(){
    this.InternsService.getInterns().subscribe(
      data=>{ this.lstInterns=data;
      });
      console.log( this.lstInterns)

  }

  // show details a perticular  
  showDetails(id:string){
    this.router.navigate(['/interndetails/',id]);
  }

  // delete the intern record
  delete(id:string){
    var r = confirm("Are You sure to delete this Intern");
    if (r == true) {
      this.InternsService.delete(id).subscribe(data =>{this.getInterns();});
    } else {
      window.alert("You have not delete the intern");
    }
  }

  //Update intern the Intern record
  updateIntern (actionType: string,intern:Intern)  {
    if(actionType === "deactivate"){
      intern.isActive = ! intern.isActive;
    }
    let tempIntern = new Intern();
     tempIntern = Object.assign(new Intern(), intern);
    console.log(tempIntern);
    this.InternsService.deActivated(intern._id,tempIntern).subscribe(res=>console.log(res));
  }

}
