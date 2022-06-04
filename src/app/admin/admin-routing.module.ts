import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataResolverServiceResolver } from '../resolvers/data-resolver-service.resolver';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path:'', component:FormComponent,
    resolve: {departamentos: DataResolverServiceResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
