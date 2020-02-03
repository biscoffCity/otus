import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { OtusService } from '../../services/otus.service'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  obj: any = [];
  searchName: string;

  //Dispaly on UI 
  firstName: string; 
  lastName: string; 
  studentGPA: string;
  loadDetails: boolean = false;
  email: string;
  studentClasses: [];

  constructor(private otusService:OtusService) { }

  ngOnInit() {
  }

  getStudent() {
    return this.otusService.getStudent().toPromise().then(data => {
      //Get Json Data and split into Students and Classes 
      const students = (data as any).students;
      const classes = (data as any).classes;

      //search student name by first, last or full name 
      const student = students.find(item => {
        let fullName = item.first + item.last;
        return ( 
          item.first.toLowerCase() == this.searchName.toLowerCase() || 
          item.last.toLowerCase() == this.searchName.toLowerCase() || 
          fullName.toLowerCase() == this.searchName.toLowerCase().replace(/\s/g, '')
        )
      })
      //set properties for UI dispaly 
      this.firstName = student.first;
      this.lastName = student.last;

      //calcualte GPA
      var GPA = 0;
      for (let i=0; i < student.studentClasses.length; i++) { 
        GPA += student.studentClasses[i].grade;
      }

      //calcucalte GPA 
      GPA = GPA/student.studentClasses.length;
      this.studentGPA = GPA.toFixed(2);

      //Find student class ID and Replace with the actual Class Name from Classes property 
      for (let i=0; i < students.length; i++) {
        students[i].studentClasses = students[i].studentClasses.map(item => {
          item.id = classes[item.id];
          return item
        })
      }

      //for ui display
      this.studentClasses = student.studentClasses;

      //for ui display
      this.email = student.email;

      //for ui display 
      this.loadDetails = true;
    })
  }

}
