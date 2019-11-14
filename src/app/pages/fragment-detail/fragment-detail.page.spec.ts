import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FragmentDetailPage } from './fragment-detail.page';

describe('FragmentDetailPage', () => {
  let component: FragmentDetailPage;
  let fixture: ComponentFixture<FragmentDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FragmentDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FragmentDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
