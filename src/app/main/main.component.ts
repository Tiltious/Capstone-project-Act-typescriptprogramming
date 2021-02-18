import { Component, OnInit, ViewChild } from '@angular/core';
import { Employees } from '../employees';
import { EmployeesService } from '../employees.service';
import { EmpentryformComponent } from './empentryform/empentryform.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  myemployees:Employees[]=[]
  sidetoggle=true
  sidetg(){
    this.sidetoggle=!this.sidetoggle
  }

  constructor(private empdetails:EmployeesService) {
   }

  ngOnInit(): void {
  }

}
