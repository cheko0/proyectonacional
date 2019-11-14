import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeystonesPage } from './keystones.page';

describe('KeystonesPage', () => {
  let component: KeystonesPage;
  let fixture: ComponentFixture<KeystonesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeystonesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeystonesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
