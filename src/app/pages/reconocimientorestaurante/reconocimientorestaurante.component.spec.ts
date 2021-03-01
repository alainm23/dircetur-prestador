import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconocimientorestauranteComponent } from './reconocimientorestaurante.component';

describe('ReconocimientorestauranteComponent', () => {
  let component: ReconocimientorestauranteComponent;
  let fixture: ComponentFixture<ReconocimientorestauranteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReconocimientorestauranteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconocimientorestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
