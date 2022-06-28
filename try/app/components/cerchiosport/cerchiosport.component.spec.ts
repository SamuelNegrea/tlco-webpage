import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerchiosportComponent } from './cerchiosport.component';

describe('CerchiosportComponent', () => {
  let component: CerchiosportComponent;
  let fixture: ComponentFixture<CerchiosportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CerchiosportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CerchiosportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
