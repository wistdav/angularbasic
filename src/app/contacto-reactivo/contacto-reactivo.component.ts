import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-contacto-reactivo',
  templateUrl: './contacto-reactivo.component.html',
  styleUrls: ['./contacto-reactivo.component.scss']
})
export class ContactoReactivoComponent implements OnInit {
  formContacto!: FormGroup;
  name!:string;
  contacto!:string;
  obtener:string[] =[];
  titulo:string='Hola mundo';
  selected$ = this.dataSVc.selectedBarber$;

  constructor(
    private readonly fb:FormBuilder,
    private readonly route:ActivatedRoute,
    private readonly dataSVc: DataService) { }

    ngOnInit(): void {
      this.obtener = this.route.snapshot.data['departaments'];
      this.route.queryParams.subscribe((parametros: Params) =>{
        this.name = parametros['name'];
        this.contacto = parametros['telefono'];
      });
      this.formContacto = this.initForm();
      this.onPatchValue();
    }

    onPatchValue(): void{
      this.formContacto.patchValue({name:'Jessica'});
      this.formContacto.patchValue({comentario:'Lorem Isomp'});
      this.formContacto.patchValue({departamento:'Cauca'});
    }

    onSetValue():void{
      this.formContacto.setValue({name:'Jessica'});
      this.formContacto.setValue({comentario:'Lorem Isomp'});
      this.formContacto.setValue({departamento:'Cauca'});
    }

    onFormulario(){
      console.log('Formulario ->', this.formContacto.value);
    }
    initForm(): FormGroup {
      return this.fb.group({
        name: ['',[Validators.required,Validators.minLength(3)]],
        checkEdad: ['',[Validators.required]],
        comentario: ['',[Validators.required,Validators.minLength(5)]],
        departamento: ['',[Validators.required]]
      });
    }
}







