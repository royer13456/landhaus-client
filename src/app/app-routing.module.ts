import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import  { TortasListComponent } from './components/tortas-list/tortas-list.component';
import  { TortasFormComponent } from './components/tortas-form/tortas-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tortas',
    pathMatch: 'full'
  },
  {
    path: 'tortas',
    component: TortasListComponent
  },
  {
    path: 'tortas/add',
    component: TortasFormComponent
  },
  {
    path:'tortas/edit/:id_tortas',
    component: TortasFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
