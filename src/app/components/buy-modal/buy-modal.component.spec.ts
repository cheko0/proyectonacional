import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyModalComponent } from './buy-modal.component';

describe('BuyModalComponent', () => {
  let component: BuyModalComponent;
  let fixture: ComponentFixture<BuyModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyModalComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
