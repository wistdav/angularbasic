import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Barbers } from '../services/data.service';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormNewItemComponent implements OnInit {
  @Input() label!:string;
  @Input() className!:string;
  @Input() className1:string='btn-warning';
  @Input() selection!:Barbers;

  @Output() addEvent = new EventEmitter<string>();
  @Output() updateEvent = new EventEmitter<Barbers>();
  constructor() { }

  ngOnInit(): void {
  }

  onAgregar(item: string){
    this.addEvent.emit(item);
  }

  onUpdate(item: Barbers, change: string){
    const elementUpdate = {
      id: item.id,
      nombre: change
    }
    this.updateEvent.emit(elementUpdate);
  }

}
