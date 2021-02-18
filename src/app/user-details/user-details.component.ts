import { Component, Input, OnInit } from '@angular/core';
import { Employees } from 'src/app/employees';
import { EmployeesService } from 'src/app/employees.service';
import { Devices } from '../devices';
import { DevicesService } from '../devices.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  toggle=true
  myemployees:any
  btntoogle:boolean
  intertoggle:boolean=true
  deltoggle:boolean=true
  constructor(
    private employee:EmployeesService,
    private device:DevicesService
    ) { 
    this.myemployees=this.employee.myemployees
  }
  ngOnInit(): void {
    this.employee.selectedemp.subscribe((emp:Employees)=>{
      this.myemployees=emp
      this.devDisplay(this.myemployees.id)
    })
  }

  sendDevice(dev:Devices){
    this.device.selecteddev.emit(dev)
    console.log(dev)
    console.log('workssofar2dev')
  }
  devs:any[]=[]
  back:any[]=[]
  devDisplay(emp_id:any){
   this.devs=this.device.devAssign(emp_id)
   this.back=this.device.devDisplay(this.devs)
  }
  assignments1=this.device.assignments
}
