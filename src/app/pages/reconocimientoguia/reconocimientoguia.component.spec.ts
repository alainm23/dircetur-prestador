import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconocimientoguiaComponent } from './reconocimientoguia.component';

describe('ReconocimientoguiaComponent', () => {
  let component: ReconocimientoguiaComponent;
  let fixture: ComponentFixture<ReconocimientoguiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReconocimientoguiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconocimientoguiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
