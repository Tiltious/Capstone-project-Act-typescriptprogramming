import { Component, Input, OnInit } from '@angular/core';
import { Employees } from '../employees';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  myemployees:any
  sendemployee(employee:Employees){
    this.empdetails.selectedemp.emit(employee)
    console.log('workssofar2')
  }
  constructor(private empdetails:EmployeesService) { }

  ngOnInit(): void {
    this.myemployees=this.empdetails.myemployees
    console.log('worksidebar')
  }


}
