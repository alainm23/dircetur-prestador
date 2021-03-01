import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamorestauranteComponent } from './reclamorestaurante.component';

describe('ReclamorestauranteComponent', () => {
  let component: ReclamorestauranteComponent;
  let fixture: ComponentFixture<ReclamorestauranteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamorestauranteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamorestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
