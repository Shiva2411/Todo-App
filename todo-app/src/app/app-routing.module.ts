import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginFormComponent},
  {path:"signup",component:LoginFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
