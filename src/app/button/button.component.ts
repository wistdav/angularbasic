import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Barbers } from '../services/data.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit, OnChanges, OnDestroy{
  @Input() color!:string;
  @Input() tipobutton!:string;
  @Input() label!:string;
  @Input() seleccionado!:Barbers;
  constructor() { }


  ngOnChanges(changes: SimpleChanges): void {
/*     console.log('Changes ->', changes); */
  }
  ngOnDestroy(): void {
/*     console.log('Destroy'); */
  }

  ngOnInit(): void {
/*     console.log('OnInit'); */
  }

}
