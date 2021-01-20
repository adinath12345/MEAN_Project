import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C1productsComponent } from './c1products.component';

describe('C1productsComponent', () => {
  let component: C1productsComponent;
  let fixture: ComponentFixture<C1productsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C1productsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C1productsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
