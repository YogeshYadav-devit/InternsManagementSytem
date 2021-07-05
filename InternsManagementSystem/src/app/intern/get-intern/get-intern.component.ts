import { Component, OnInit, TemplateRef } from '@angular/core';
import { Intern } from '../models/Intern';
import {status}from '../enums/status.enum';
import { InternsService } from '../services/interns.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-get-intern',
  templateUrl: './get-intern.component.html',
  styleUrls: ['./get-intern.component.css']
})
export class GetInternComponent implements OnInit {
  max:any;
  status= status;
  index=0;
  modalRef!: BsModalRef;
  progressDate !: Date;
  progressWork !: string;
  lstInterns:Intern[]=[];
  constructor( private router: Router,private modalService: BsModalService, private InternsService : InternsService,private activatedRoute:ActivatedRoute  ) 
  {  
   this.max = new Date;
    this.getInterns();  

  }

  ngOnInit(): void {
   
  }

  // get the intern record into the intern service 
  getInterns(){
    this.InternsService.getInterns().subscribe(
      data=>{ this.lstInterns=data;
        // sort the progressWork by date
        this.lstInterns.forEach((data1) => {

          data1.progress?.sort((a, b) => {
            let fa = a.date,
                fb = b.date;
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });
      });
      });
      console.log(typeof this.lstInterns)

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
    if(actionType === "progress"){
      var p ={date:this.progressDate,work:this.progressWork};
      console.log(p.date+" "+p.work)
      console.log(typeof p.date)
      intern.progress?.push(p);
    }
    console.log(intern);
    let tempIntern = new Intern();
     tempIntern = Object.assign(new Intern(), intern);
    console.log(tempIntern);
    this.InternsService.deActivated(intern._id,tempIntern).subscribe(res=>console.log(res));
   
  }
  // show pop 
  openModalWithClass(template: TemplateRef<any>) {  
    this.modalRef = this.modalService.show(  
      template, 
      Object.assign({}, { class: 'gray modal-lg' })  
    );  
  } 

}
