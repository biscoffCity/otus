import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentInfo} from '../models/StudentInfo'
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class OtusService {
  studentInfo:string = 'https://gist.githubusercontent.com/edotus/bd63eefb9b4b1eacb641811f9a1a780d/raw/60e04520584f7a436917b0d5be2b6c18f039fadb/students_classes.json';

  constructor(private http:HttpClient) {}

  // create basic servince function
  // user it component ts files to create a promise or subseribe to an observable 
  getStudent() {
    return this.http.get(this.studentInfo)
  }
}
