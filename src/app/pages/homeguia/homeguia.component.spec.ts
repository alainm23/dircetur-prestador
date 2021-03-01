import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeguiaComponent } from './homeguia.component';

describe('HomeguiaComponent', () => {
  let component: HomeguiaComponent;
  let fixture: ComponentFixture<HomeguiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeguiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeguiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
