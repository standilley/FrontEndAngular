import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/Employees';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  btnAcao: string = 'Editar!'
  btnTitulo: string = 'Editar Funcionário'
  funcionario!: Employee

  constructor(private employeeService: EmployeeService, private route : ActivatedRoute, private router : Router){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.employeeService.GetEmployee(id).subscribe((data)=>{
      this.funcionario = data.data;
    })
  }

  editarFuncionario(employee : Employee){
    this.employeeService.EditarFuncionario(employee).subscribe((data)=>{
      this.router.navigate(['/'])
    })
  }
}
