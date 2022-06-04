import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprobarGuard } from '../guards/comprobar.guard';
import { DataResolverServiceResolver } from '../resolvers/data-resolver-service.resolver';
import { ContactoReactivoComponent } from './contacto-reactivo.component';

const routes: Routes = [
  {
    path: '',component:ContactoReactivoComponent,
    canDeactivate: [ComprobarGuard],
    resolve: {departaments : DataResolverServiceResolver}
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactoReactivoRoutingModule { }
