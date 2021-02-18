import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DevicesService } from 'src/app/devices.service';
import { Employees } from 'src/app/employees';
import { EmployeesService } from 'src/app/employees.service';
import { GetValidationService } from 'src/app/get-validation.service';

@Component({
  selector: 'app-empentryform',
  templateUrl: './empentryform.component.html',
  styleUrls: ['./empentryform.component.css']
})
export class EmpentryformComponent implements OnInit {

  myemp:any=new Employees('','','','')

  constructor(
    private empdetails:EmployeesService,
    private devservice:DevicesService,
    private validator:GetValidationService) { }
  
  empcontrol:any

  ngOnInit(): void {
    this.empdetails.selectedemp.subscribe((employee:any)=>{
      this.myemp=employee
      this.empcontrol=new FormGroup({
        emp_id:new FormControl(this.myemp.emp_id,[this.validator.val(this.empdetails.myemployees)]),
        name:new FormControl(this.myemp.name,[Validators.minLength(3),Validators.maxLength(255),Validators.required]),
        email:new FormControl(this.myemp.email)
      })
    })
  }
  formReset(){
    this.empcontrol.reset()
  }
  toggle=true
  toggledevform(){
    this.toggle=!this.toggle
  }
  editEmployee(employee:Employees){
    this.empdetails.editEmployee(employee.id,this.empcontrol.value)
    alert('Refresh Page Required')
  }
  deleteEmployee(id:string){
    let fordelete:any[]=[]
    fordelete=this.devservice.assignments.filter(
      (assign:any)=>{
        return assign.employee_id===id
      }
    )
    for(let del of fordelete){
      console.log(del.device_id,'dev---id')
      this.devservice.deleteDevice(del.device_id)
    }
    this.empdetails.deleteEmployee(id)
    console.log(fordelete,'foredelete')
    alert('Employee delete')
  }

}
