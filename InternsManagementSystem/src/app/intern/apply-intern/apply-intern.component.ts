import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Intern } from '../models/Intern';
import { InternsService } from '../services/interns.service';
import {status}from '../enums/status.enum';


@Component({
  selector: 'app-apply-intern',
  templateUrl: './apply-intern.component.html',
  styleUrls: ['./apply-intern.component.css']
})
export class ApplyInternComponent implements OnInit {
  max:any;
  InternPosts!: Intern;
  popup!:boolean;
 

  constructor(private InternsService: InternsService ,private router: Router) { 
    this.max = new Date;
  }
  onSubmit(data: Intern) {
    data.isActive=false;  
    // data.status=status.pending;
    data.status= 'Pending';
    this.InternPosts = data;
    this.InternsService.post(this.InternPosts);
    alert("Succesfull Add The Intern");
    this.router.navigateByUrl('/interns'); 
  }
  ngOnInit(): void {

  }

}
