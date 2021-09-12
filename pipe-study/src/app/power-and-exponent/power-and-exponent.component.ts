import { Component, OnInit } from '@angular/core';
import { Member, members } from "../member";

@Component({
  selector: 'app-power-and-exponent',
  templateUrl: './power-and-exponent.component.html',
  styleUrls: ['./power-and-exponent.component.css']
})
export class PowerAndExponentComponent implements OnInit {

  members:Member[]=[];
  base:number|any;
  power:number|any;

  leader:boolean=false;
  constructor() { 
    this.members=members
  }

  ngOnInit(): void {
  }

  addMember(name:string){
    
    name=name.trim();
    if(!name){return}
    const member = {name:name,leader:this.leader};
    this.members.push(member);
  }
  onBaseChange(value:any){
    this.base=value;
  }
  onExponentChange(value:any){
    this.power = value;
  }

}
