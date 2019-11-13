import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRolPage } from './select-rol.page';

describe('SelectRolPage', () => {
  let component: SelectRolPage;
  let fixture: ComponentFixture<SelectRolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectRolPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
