import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerreclamoagenciaComponent } from './verreclamoagencia.component';

describe('VerreclamoagenciaComponent', () => {
  let component: VerreclamoagenciaComponent;
  let fixture: ComponentFixture<VerreclamoagenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerreclamoagenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerreclamoagenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
