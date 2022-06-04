import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoReactivoRoutingModule } from './contacto-reactivo-routing.module';
import { ContactoReactivoComponent } from './contacto-reactivo.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContactoReactivoComponent],
  imports: [
    CommonModule,
    ContactoReactivoRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContactoReactivoModule { }
