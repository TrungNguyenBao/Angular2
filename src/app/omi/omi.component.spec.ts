/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OmiComponent } from './omi.component';

describe('OmiComponent', () => {
  let component: OmiComponent;
  let fixture: ComponentFixture<OmiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
