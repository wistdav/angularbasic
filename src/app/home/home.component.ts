import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EMPTY } from 'rxjs';
import { Barbers, DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  listadoBarberos:Barbers[] =[];
  selectBarbero!:Barbers;
  filtro:string='';

  constructor(
    private readonly route:ActivatedRoute,
    private readonly dataService:DataService,
    private readonly toastr: ToastrService){
      this.listadoBarberos = route.snapshot.data['listaBarbers'];
      dataService.selectedBarber$.subscribe((res: Barbers)=>{
        this.selectBarbero = res;
      });
    }

  onNewBarber(barbero:string): void{
    this.dataService.saveBarber(barbero).subscribe(res => {
      this.listadoBarberos.push(res);
    });
  }

  onUpdateBarber(barbero: Barbers):void{
    this.dataService.updateBarber(barbero).subscribe(
      res =>{
        this.toastr.success('Actualización exitosa');
        const itemUpdate = this.listadoBarberos.filter(item => item.id !== barbero.id);
        this.listadoBarberos = [...itemUpdate,barbero];
        this.onClear();
      },error =>{
        console.log(error);
      }
    )
  }

  onDeleteBarber(id: string): void{
    if(confirm('Estas segur@?')){
      this.dataService.deleteBarber(id).subscribe(
        res => {
          const newArray = this.listadoBarberos.filter(array => array.id !== id);
          this.listadoBarberos = [...newArray];
          this.onClear();
        },err =>{
          this.toastr.error('No se pudo eliminar');
        }
      )
    }
  }

   onSelectBarbero(barbero: Barbers){
    this.selectBarbero = barbero;
//    this.dataService.setBarber(barbero);
  }

  onClear(){
    this.selectBarbero = {
      id:'',
      nombre:'',
    };
  }


}
