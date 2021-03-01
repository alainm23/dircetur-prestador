import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconocimientoagenciaComponent } from './reconocimientoagencia.component';

describe('ReconocimientoagenciaComponent', () => {
  let component: ReconocimientoagenciaComponent;
  let fixture: ComponentFixture<ReconocimientoagenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReconocimientoagenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconocimientoagenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
