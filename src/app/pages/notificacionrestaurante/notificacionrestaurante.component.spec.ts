import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionrestauranteComponent } from './notificacionrestaurante.component';

describe('NotificacionrestauranteComponent', () => {
  let component: NotificacionrestauranteComponent;
  let fixture: ComponentFixture<NotificacionrestauranteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificacionrestauranteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificacionrestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
