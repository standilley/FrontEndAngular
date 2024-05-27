import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../../models/Employees';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent implements OnInit{

  @Output() onSubmit = new EventEmitter<Employee>();

  employeeForm!: FormGroup

  constructor(){}

ngOnInit(): void {
  this.employeeForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    department: new FormControl('', [Validators.required]),
    active: new FormControl(true),
    shift: new FormControl('', [Validators.required]),
    createDate: new FormControl(new Date()),
    changeDate: new FormControl(new Date()),


  });


}
submit() {
  this.onSubmit.emit(this.employeeForm.value);
}

}
