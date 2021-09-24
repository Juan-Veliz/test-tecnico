import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { 
    path: 'inicio', 
    component: HomeComponent 
  },
  { 
    path: 'usuarios', 
    component: UserComponent 
  },
  { 
    path: "", 
    redirectTo:'/inicio', 
    pathMatch:"full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
