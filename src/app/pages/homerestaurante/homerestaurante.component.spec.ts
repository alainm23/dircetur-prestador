import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomerestauranteComponent } from './homerestaurante.component';

describe('HomerestauranteComponent', () => {
  let component: HomerestauranteComponent;
  let fixture: ComponentFixture<HomerestauranteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomerestauranteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomerestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
