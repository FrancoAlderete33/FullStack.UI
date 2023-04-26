import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeesService } from 'src/app/Services/employees.service';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
addEmployeeRequest: Employee = {
  id: '',
  name:'',
  email: '',
  phone: 0 ,
  salary: 0 ,
  department: ''
};

constructor(private EmployeeServices: EmployeesService,
            private router: Router){ }

ngOnInit(){

}

addEmployee(){
  this.EmployeeServices.addEmployee(this.addEmployeeRequest)
  .subscribe({
    next: (employee) => {
      console.log(employee)
      this.router.navigate(['employees'])
    },
    error: (response) => {
      console.log(response);
    }
  })
}



}
