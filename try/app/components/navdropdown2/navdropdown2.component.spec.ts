import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navdropdown2Component } from './navdropdown2.component';

describe('Navdropdown2Component', () => {
  let component: Navdropdown2Component;
  let fixture: ComponentFixture<Navdropdown2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Navdropdown2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Navdropdown2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
