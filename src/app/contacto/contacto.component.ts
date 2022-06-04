import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

interface ContactoForm
{
  "name": string;
  "checkEdad": boolean;
  "departamento": string;
  "comentario": string;
}

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  identificador!:string;
  modelo = {
    name: "",
    checkEdad: false,
    departamento: "",
    comentario: ""
  }

  constructor(private readonly route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (parametros) =>{
        this.identificador = parametros['id'];
      }
    )
  }

  onSubmit(form: NgForm):void{
    console.log('Formulario template-driven', form);
  }

}
