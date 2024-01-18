import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ForgotPwdComponent } from './Components/forgot-pwd/forgot-pwd.component';
import { ResetPwdComponent } from './Components/reset-pwd/reset-pwd.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { GetNotesComponent } from './Components/get-notes/get-notes.component';
import { ArchivedNotesComponent } from './Components/archived-notes/archived-notes.component';
import { TrashNotesComponent } from './Components/trash-notes/trash-notes.component';

const routes: Routes = [
  {path : 'register', component : RegisterComponent},
  {path : 'login', component : LoginComponent},
  {path : 'forgotpwd', component : ForgotPwdComponent},
  {path : 'resetpwd/:token', component : ResetPwdComponent},
  {path : 'dashboard', component : DashboardComponent, 
    children:[
      {
        path:'',redirectTo:"/dashboard/notes",pathMatch:'full'
      },
      {path:'notes',component: GetNotesComponent},
      {path:'archive',component: ArchivedNotesComponent},
      {path:'trash',component: TrashNotesComponent}
    ]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
