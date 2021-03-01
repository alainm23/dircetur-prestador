import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconocimientoalojamientoComponent } from './reconocimientoalojamiento.component';

describe('ReconocimientoalojamientoComponent', () => {
  let component: ReconocimientoalojamientoComponent;
  let fixture: ComponentFixture<ReconocimientoalojamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReconocimientoalojamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconocimientoalojamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
