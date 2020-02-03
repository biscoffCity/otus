import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.css']
})
export class MoreDetailsComponent implements OnInit {
  @Input() firstName: string; 
  @Input() lastName: string; 
  @Input() studentGPA: string;
  @Input() email: string;
  @Input() studentClasses: [];

  showDetails:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  moreDetails() {
    this.showDetails = !this.showDetails;
  }

}
