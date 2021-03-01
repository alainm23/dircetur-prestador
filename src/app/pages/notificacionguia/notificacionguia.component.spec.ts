import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionguiaComponent } from './notificacionguia.component';

describe('NotificacionguiaComponent', () => {
  let component: NotificacionguiaComponent;
  let fixture: ComponentFixture<NotificacionguiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificacionguiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificacionguiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
