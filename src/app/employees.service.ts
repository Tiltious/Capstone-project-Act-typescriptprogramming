import { EventEmitter,Injectable, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employees } from './employees';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  editEmployee(id:string,value:any){
    this.emphttp.put('https://capstone-7afbf-default-rtdb.firebaseio.com/Employees/'+id+'.json',value).subscribe(
      (data:any)=>{
        this.myemployees.splice(this.myemployees.findIndex(function(employee){
          console.log(employee.id)
          return employee.id===id
        }),1)
        let newemp=new Employees(data.id,value.emp_id,value.name,value.email)
        this.myemployees.push(newemp)
        this.selectedemp.emit(newemp)
      }
    )
  }

  deleteEmployee(id:string){
    this.emphttp.delete('https://capstone-7afbf-default-rtdb.firebaseio.com/Employees/'+id+'.json').subscribe(
      ()=>{
        this.myemployees.splice(this.myemployees.findIndex(function(employee){
          
          return employee.id===id
        }),1)
        this.selectedemp.emit(this.myemployees[0])
        console.log(this.myemployees[0])
      }
    )
  }

  @Output() selectedemp = new EventEmitter<Employees>()

  myemployees:Employees[]=[]
  constructor(private emphttp:HttpClient) {
    this.getEmployees()
   }
   publishEmployee(newemp:any){
     this.emphttp.post('https://capstone-7afbf-default-rtdb.firebaseio.com/Employees.json',newemp)
     .subscribe((data:any)=>{
       this.myemployees.push(new Employees(data.id,newemp.emp_id,newemp.name,newemp.email))
     })
   }

   getEmployees(){
     this.emphttp.get('https://capstone-7afbf-default-rtdb.firebaseio.com/Employees.json')
     .subscribe((employees:any)=>{
       for(let key in employees){
         this.myemployees.push(
           new Employees(key,employees[key].emp_id,employees[key].name,employees[key].email))
          
       }
       this.selectedemp.emit(this.myemployees[0])
     })
   }
}
