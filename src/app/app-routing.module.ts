import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { ComprobarGuard } from './guards/comprobar.guard';
import { HomeComponent } from './home/home.component';
import { PagenofountComponent } from './pagenofount/pagenofount.component';
import { BarberosResolver } from './resolvers/barberos.resolver';
import { DataResolverServiceResolver } from './resolvers/data-resolver-service.resolver';
import { DetailsComponent } from './users/details/details.component';
import { ListComponent } from './users/list/list.component';
import { UserComponent } from './users/user/user.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'contacto-reactivo',
    loadChildren: ()=>import('./contacto-reactivo/contacto-reactivo.module').then(modulo => modulo.ContactoReactivoModule)
  },
  {
    path:'admin',
    loadChildren: ()=>import('./admin/admin.module').then(modulo => modulo.AdminModule)
  },
  {
    path: 'contacto/:id',component:ContactoComponent,
    resolve: {departaments : DataResolverServiceResolver}
  },
  {
    path: 'home',component:HomeComponent,
    resolve: {listaBarbers: BarberosResolver}
  },
  {
    path: 'users', component: UserComponent,
    canActivate:[ComprobarGuard],
    children:[
      { path: 'list', component: ListComponent },
      { path: 'details', component: DetailsComponent },
    ]
  },
  {path: '**',component:PagenofountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
