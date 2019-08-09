import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fetch-operator',
  templateUrl: './fetch-operator.component.html',
  styleUrls: ['./fetch-operator.component.css']
})
export class FetchOperatorComponent implements OnInit {

  @Input() searchCity: string;
  @Output() operator: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  send(){
    if(this.searchCity === 'Chennai'){
      this.operator.emit("Ram 93939399393")
    }else{
      this.operator.emit("Rama 83848383843")
    }
  }

}
