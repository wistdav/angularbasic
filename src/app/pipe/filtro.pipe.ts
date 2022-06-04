import { Pipe, PipeTransform } from '@angular/core';
import { Barbers } from '../services/data.service';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: Barbers[], args?: any): Barbers[] {
    if(!args || args?.length <3 ){
      return value;
    }
    let resultado: Barbers[] = [];
    for(let valor of value){
      if(valor.nombre.toLowerCase().indexOf(args.toLowerCase()) > -1){
        resultado = [...resultado,valor];
      }
    }
    return resultado;
  }


}
