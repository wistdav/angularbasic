import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, delay, EMPTY, Observable, of, tap } from 'rxjs';
import { Barbers, DataService } from '../services/data.service';


@Injectable({
  providedIn: 'root'
})

export class BarberosResolver implements Resolve<Barbers[]> {
  constructor(private readonly dataService: DataService,
    private readonly router:Router,
    private readonly toastr: ToastrService) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Barbers[]> {

    return this.dataService.getBarber().pipe(
      tap(res =>{
        if(res.length>0){
          this.toastr.success('Cargando lista de Barberos');
        }else{
          this.toastr.warning('No hay barberos en la coleccion');
        }
      }),
        catchError(() => {
          this.toastr.error('No hay conexión');
          this.router.navigate(["/contacto/91"]);
          return EMPTY;
      })
    );

  }

}
