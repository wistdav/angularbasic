import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Barbers } from '../services/data.service';

@Component({
  selector: 'app-barberos',
  template: `
  <ul class="list-group">
    <li class="list-group-item mt-1" (click)="onSelectBarbero(barbero)" [ngClass]="{'active': barbero?.id === seleccionado?.id}">
      {{barbero.nombre | titlecase}}
      <button *ngIf="barbero?.id === seleccionado?.id" (click)="onDelete(barbero.id)" type="button" class="btn btn-danger float-end">Delete</button>
    </li>

  </ul>
  `,
  styleUrls: ['./barberos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarberosComponent {
  @Input() barbero!:Barbers;
  @Input() seleccionado!:Barbers;
  @Output() eventSelectEmitir = new EventEmitter<Barbers>();
  @Output() eventDeletEmiter = new EventEmitter<string>();

  onDelete(id: string):void{
    this.eventDeletEmiter.emit(id);
  }

  onSelectBarbero(barbero: Barbers):void{
    this.eventSelectEmitir.emit(barbero);
  }

}
