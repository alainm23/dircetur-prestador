import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomealojamientoComponent } from './homealojamiento.component';

describe('HomealojamientoComponent', () => {
  let component: HomealojamientoComponent;
  let fixture: ComponentFixture<HomealojamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomealojamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomealojamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
