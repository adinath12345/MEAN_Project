import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C4productsComponent } from './c4products.component';

describe('C4productsComponent', () => {
  let component: C4productsComponent;
  let fixture: ComponentFixture<C4productsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C4productsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C4productsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
