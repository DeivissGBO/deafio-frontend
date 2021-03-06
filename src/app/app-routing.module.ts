import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { UserCrudComponent } from './views/user-crud/user-crud.component';
import { UserCreateComponent } from './componentes/user/user-create/user-create.component';



const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "users",
  component: UserCrudComponent
},
{
  path: "users/create",
  component: UserCreateComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
