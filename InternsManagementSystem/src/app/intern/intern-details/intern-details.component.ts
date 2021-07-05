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
  internid !: string;
  interndetails !: Intern;
  matchinternId: boolean = false;
  index = 0;

  constructor(private InternsService: InternsService, private _route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.getInternId();
    this.showDetails();
  }
  //get the intern id into the url 
  getInternId() {
    this._route.params.subscribe(params => this.internid = params.id);
    console.log(this.internid);
  }
  // fetch the intern data of particular intern id into the internService Method is getInternsById();
  showDetails() {
    this.InternsService.getInternsById(this.internid).subscribe(data => {
      if (this.internid = data._id) {
        this.interndetails = data;
        this.matchinternId = true;
        this.interndetails.progress?.sort((a, b) => {
          let fa = a.date,
            fb = b.date;
          if (fa >fb) {
            return -1;
          }
          if (fa < fb) {
            return 1;
          }
          return 0;
        });
        this.interndetails.progress?.forEach((e) => {
          console.log(`${e.date} ${e.date}`);
        });
      }
      else {
        console.log("No Exit intern Id");
      }
    });
    console.log(this.interndetails.branchName)
  }

}
