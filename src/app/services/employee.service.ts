import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/Response';
import { Employee } from '../models/Employees';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = `${environment.apiUrl}/Employee`

  constructor( private http: HttpClient) { }

  GetEmployees() : Observable<Response<Employee[]>>{
    return this.http.get<Response<Employee[]>>(this.apiUrl);
  }
}
