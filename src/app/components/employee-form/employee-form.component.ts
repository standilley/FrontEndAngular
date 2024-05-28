import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../../models/Employees';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent implements OnInit{

  @Output() onSubmit = new EventEmitter<Employee>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dadosFuncionario: Employee | null = null;

  employeeForm!: FormGroup

  constructor(){}

ngOnInit(): void {
  this.employeeForm = new FormGroup({
    id: new FormControl(this.dadosFuncionario? this.dadosFuncionario.id : 0),
    name: new FormControl(this.dadosFuncionario? this.dadosFuncionario.name : '', [Validators.required]),
    lastName: new FormControl(this.dadosFuncionario? this.dadosFuncionario.lastName : '', [Validators.required]),
    department: new FormControl(this.dadosFuncionario? this.dadosFuncionario.department :'', [Validators.required]),
    active: new FormControl(this.dadosFuncionario? this.dadosFuncionario.active : true),
    shift: new FormControl(this.dadosFuncionario? this.dadosFuncionario.shift : '', [Validators.required]),
    createDate: new FormControl(new Date()),
    changeDate: new FormControl(new Date()),


  });


}
submit() {
  this.onSubmit.emit(this.employeeForm.value);
}

}
