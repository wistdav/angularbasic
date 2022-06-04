import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formContacto!: FormGroup;
  name!:string;
  obtener:string[] =[];
  selected$ = this.dataSVc.selectedBarber$;
  constructor(
    private readonly fb:FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly dataSVc: DataService) {

  }

  ngOnInit(): void {
    this.obtener = this.route.snapshot.data['departamentos'];
    this.formContacto =this.obtenerFormGruop();
  }

  onFormulario(){
    console.log(this.formContacto.value);
  }

  obtenerFormGruop(): FormGroup{
    return this.fb.group({
      name: ['',[Validators.required,Validators.minLength(3)]],
      comentario: ['',[Validators.required,Validators.minLength(3)]],
      checkEdad: ['',[Validators.required]],
      departamento: ['',[Validators.required]],
    })
  }

}
