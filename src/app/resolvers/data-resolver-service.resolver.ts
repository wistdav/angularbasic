import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

const departaments = ['Valle del Cauca','Cauca','Amazonas','Antioquia','Nariño','Otro']

@Injectable({
  providedIn: 'root'
})
export class DataResolverServiceResolver implements Resolve<boolean> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return of(departaments);
  }
}
