import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamoguiaComponent } from './reclamoguia.component';

describe('ReclamoguiaComponent', () => {
  let component: ReclamoguiaComponent;
  let fixture: ComponentFixture<ReclamoguiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamoguiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamoguiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
