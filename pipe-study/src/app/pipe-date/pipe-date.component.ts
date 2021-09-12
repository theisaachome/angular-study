import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-date',
  templateUrl: './pipe-date.component.html',
  styleUrls: ['./pipe-date.component.css']
})
export class PipeDateComponent implements OnInit {

  birthday = new Date(1989,4,4);
  startDate = new Date().getTime();
  endDate= new Date(2022,0,1).getTime();
  toggle=false;
  
  constructor() { }

  ngOnInit(): void {
  }
  get duration(){
    return this.endDate - this.startDate;
  }

  get format(){
    return this.toggle?"shortDate":'fullDate';
  }
  onChangeFormat(){
    console.log("Click Me");
    
    this.toggle = !this.toggle;
  }
}
