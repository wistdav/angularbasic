import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoReactivoComponent } from './contacto-reactivo.component';

describe('ContactoReactivoComponent', () => {
  let component: ContactoReactivoComponent;
  let fixture: ComponentFixture<ContactoReactivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoReactivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoReactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
