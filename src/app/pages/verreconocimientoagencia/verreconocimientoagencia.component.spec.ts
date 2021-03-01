import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerreconocimientoagenciaComponent } from './verreconocimientoagencia.component';

describe('VerreconocimientoagenciaComponent', () => {
  let component: VerreconocimientoagenciaComponent;
  let fixture: ComponentFixture<VerreconocimientoagenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerreconocimientoagenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerreconocimientoagenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
