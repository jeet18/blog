import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

   @Input() passData: any;
   @Input() passData1:any= [];
 
   @Output() parentFunction: EventEmitter<any> = new EventEmitter()

  constructor() { }
  ngOnInit(): void {
    this.parentFunction.emit("Jitendra")
  }

}
