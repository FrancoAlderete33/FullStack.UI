import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

 urlBase: string = 'https://localhost:7061/' 

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
   return this.http.get<Employee[]>(this.urlBase + 'api/employees');
  }

  addEmployee(addEmployeeRequest: Employee): Observable<Employee>{
    addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000'
   return this.http.post<Employee>(this.urlBase + 'api/employees', addEmployeeRequest )
  }

  getEmployee(id: string): Observable<Employee>{
   return this.http.get<Employee>(this.urlBase + 'api/employees/' + id );
  }


  updateEmployee(id: string , updateEmployeeRequest: Employee): Observable<Employee>{
   return this.http.put<Employee>(this.urlBase + 'api/employees/' + id, updateEmployeeRequest)
  }

  deleteEmployee(id: string): Observable<Employee>{
    return this.http.delete<Employee>(this.urlBase + 'api/employees/' + id)
  }


}
