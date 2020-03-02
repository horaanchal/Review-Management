import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-review-table',
  templateUrl: './review-table.component.html',
  styleUrls: ['./review-table.component.scss']
})

export class ReviewTableComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
    console.log("Hi there");
    this.feedTable(this.getData(this.status));
  }

  status: number = 1;
  temp: any;
  key: any;
  dummy: any;

  dummyJsonForAllReviews: any;
  dummyJsonForPendingByReviewer: any;

  refreshComponent(status: number){
    this.status = status;
    this.ngOnInit();
  }

  getData(status: number){
    //service to be called here
    this.dummyJsonForAllReviews = [
      {
        "FormName": "Consultant 1",
        "Cycle": "Annual 2020",
        "TargetDate": "9-03-2020",
        "Status": "Closed"
      },
      {
        "FormName": "Consultant 2",
        "Cycle": "Annual 2021",
        "TargetDate": "9-03-2021",
        "Status": "Closed"
      },
      {
        "FormName": "Associate 1",
        "Cycle": "Annual 2022",
        "TargetDate": "9-03-2022",
        "Status": "QAer Pending"
      },
      {
        "FormName": "Associate 2",
        "Cycle": "Annual 2023",
        "TargetDate": "9-03-2023",
        "Status": "Self Review"
      }
    ];
    
    this.dummyJsonForPendingByReviewer = [
      {
        "FormName": "Consultant 1",
        "Cycle": "Annual 2020",
        "TargetDate": "9-03-2020",
        "ReviewerName": "Vishal Ranjan", 
        "Status": "Closed"
      },
      {
        "FormName": "Consultant 1",
        "Cycle": "Annual 2021",
        "TargetDate": "9-03-2021",
        "ReviewerName": "Sonali Chawla",
        "Status": "Closed"
      }
    ];

    if(status == 1){
      return(this.dummyJsonForAllReviews);
    }
    else if(status == 2){
      return(this.dummyJsonForPendingByReviewer);
    }
  }

  getValues(temp: any){
    return (Object.values(temp));
  }

  feedTable(obj: any){
    this.key = Object.keys(obj[0]);
    console.log(this.key);
    this.dummy = obj;
  }
  
}