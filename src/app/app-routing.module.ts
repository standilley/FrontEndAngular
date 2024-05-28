import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import path from 'path';
import { HomeComponent } from './pages/home/home.component';
import { EditComponent } from './pages/edit/edit.component';

const routes: Routes = [
  {path: 'cadastro', component: RegisterComponent},
  {path: '', component: HomeComponent},
  {path: 'editar/:id', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
