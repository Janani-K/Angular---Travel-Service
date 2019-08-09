import { Component, OnInit } from '@angular/core';
import { ToursService } from '../tours.service';
import { Tours } from '../tours';

@Component({
  selector: 'app-show-tours',
  templateUrl: './show-tours.component.html',
  styleUrls: ['./show-tours.component.css']
})
export class ShowToursComponent implements OnInit {

  tourList: Tours[];

  constructor(private service: ToursService) { }

  ngOnInit() {
    this.service.findAll().subscribe(resp => this.tourList = resp)
  }

}
