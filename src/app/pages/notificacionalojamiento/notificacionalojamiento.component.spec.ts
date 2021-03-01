import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionalojamientoComponent } from './notificacionalojamiento.component';

describe('NotificacionalojamientoComponent', () => {
  let component: NotificacionalojamientoComponent;
  let fixture: ComponentFixture<NotificacionalojamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificacionalojamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificacionalojamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
