import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionagenciaComponent } from './notificacionagencia.component';

describe('NotificacionagenciaComponent', () => {
  let component: NotificacionagenciaComponent;
  let fixture: ComponentFixture<NotificacionagenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificacionagenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificacionagenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
