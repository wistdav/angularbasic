import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Barbers{
  id: string;
  nombre: string;
}

const initBarber ={
  id: '',
  nombre: ''
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private Barber$ = new BehaviorSubject<Barbers>(initBarber);
  private readonly API =environment.api;

  constructor(private readonly http: HttpClient) { }

  get selectedBarber$(): Observable<Barbers>{
    return this.Barber$.asObservable();
  }

  setBarber(barbero: Barbers):void{
    return this.Barber$.next(barbero);
  }

  saveBarber(barbero:string):Observable<Barbers>{
    const body = {nombre: barbero};
    return this.http.post<Barbers>(this.API,body);
  }

  getBarber():Observable<Barbers[]>{
    return this.http.get<Barbers[]>(this.API);
  }

  updateBarber(barbero: Barbers):Observable<void>{
    const body = {nombre: barbero.nombre};
//    return this.http.put<void>(this.API +'/'+ barbero.id, barbero.nombre);
    return this.http.put<void>(this.API +'/'+ barbero.id, body);
  }

  deleteBarber(id: string): Observable<void>{
    return this.http.delete<void>(this.API+'/'+id);
  }

}
