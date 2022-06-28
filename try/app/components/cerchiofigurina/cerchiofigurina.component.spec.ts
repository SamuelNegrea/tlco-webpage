import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerchiofigurinaComponent } from './cerchiofigurina.component';

describe('CerchiofigurinaComponent', () => {
  let component: CerchiofigurinaComponent;
  let fixture: ComponentFixture<CerchiofigurinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CerchiofigurinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CerchiofigurinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
