import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamoagenciaComponent } from './reclamoagencia.component';

describe('ReclamoagenciaComponent', () => {
  let component: ReclamoagenciaComponent;
  let fixture: ComponentFixture<ReclamoagenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamoagenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamoagenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
