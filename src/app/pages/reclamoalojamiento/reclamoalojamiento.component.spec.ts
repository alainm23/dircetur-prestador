import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamoalojamientoComponent } from './reclamoalojamiento.component';

describe('ReclamoalojamientoComponent', () => {
  let component: ReclamoalojamientoComponent;
  let fixture: ComponentFixture<ReclamoalojamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamoalojamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamoalojamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
