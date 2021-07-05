import { Injectable } from '@angular/core';
import { Intern } from '../models/Intern';
import { InternsService } from './interns.service';

@Injectable({
  providedIn: 'root'
})
export class LocalInternService {
  lstInterns:Intern[]=[];

  constructor(private internService:InternsService) { 
    
  }
  public getAllInterns() {
    this.internService.getInterns().subscribe(res=>{
      console.log(res);
      if(res.success){
        this.lstInterns = res;
      }
    });
  }
}
