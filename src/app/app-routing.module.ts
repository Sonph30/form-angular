import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';


import { LoginloguotComponent } from './components/loginloguot/loginloguot.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoComponent } from './components/todo/todo.component';
import { FormDataComponent } from './components/form-data/form-data.component';


const routes: Routes = [
  { path: 'Login', component: LoginloguotComponent },
  { path: 'home', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'data', component: FormDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
