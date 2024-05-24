import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/Employees';
import { Console } from 'console';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  employees: Employee[] = [];
  GeneralEmployees: Employee[] = [];

  constructor(private employeeService: EmployeeService){}

  ngOnInit(): void {
    this.employeeService.GetEmployees().subscribe(data =>{
      const dados = data.data;
      dados.map((item) =>{
        item.createDate = new Date(item.createDate!).toLocaleDateString('pt-BR');
        item.changeDate = new Date(item.changeDate!).toLocaleDateString('pt-BR');
      })
      this.employees = data.data;
      this.GeneralEmployees = data.data;
    });
  }

  search(event: Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.employees = this.GeneralEmployees.filter(employee => {
      return employee.name.toLowerCase().includes(value);
    })
  }

}

