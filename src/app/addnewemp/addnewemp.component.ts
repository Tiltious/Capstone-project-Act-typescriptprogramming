import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employees } from '../employees';
import { EmployeesService } from '../employees.service';
import { GetValidationService } from '../get-validation.service';

@Component({
  selector: 'app-addnewemp',
  templateUrl: './addnewemp.component.html',
  styleUrls: ['./addnewemp.component.css']
})
export class AddnewempComponent implements OnInit {

  myemployees:any
  constructor(private empdetails:EmployeesService,private validator:GetValidationService) { }
  
  empcontrol=new FormGroup({
    emp_id:new FormControl('',[Validators.pattern('^[0-9]*$'),this.validator.val(this.empdetails.myemployees),Validators.required]),
    name:new FormControl('',[Validators.minLength(3),Validators.maxLength(255),Validators.required]),
    email:new FormControl('',[Validators.email,Validators.required])
  })

  ngOnInit(): void {
    this.myemployees=this.empdetails.myemployees
  }
  toggle=true
  toggledevform(){
    this.toggle=!this.toggle
  }

  formReset(){
    this.empcontrol.reset()
  }
  addEmployee(){
    this.empdetails.publishEmployee(this.empcontrol.value)
    console.log(this.empcontrol.value)
    console.log( this.empcontrol.valid)
    alert('Employee registration complete')
    this.formReset()
  }

}
