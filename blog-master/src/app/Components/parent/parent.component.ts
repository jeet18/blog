import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
  ParentData = "Parent Data Here"
 
  ParentData1 = [
    {
    name: 'Abhi',
    age : '25',
    email: 'test@test.com'
   },
   {
    name: 'Raj',
    age : '26',
    email: 'test@test.com'
   }
]

  ngOnInit(): void {
  }

  parentFunction(data:any){
    console.log(data);

  }

}
