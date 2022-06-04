import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenofountComponent } from './pagenofount.component';

describe('PagenofountComponent', () => {
  let component: PagenofountComponent;
  let fixture: ComponentFixture<PagenofountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagenofountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagenofountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
