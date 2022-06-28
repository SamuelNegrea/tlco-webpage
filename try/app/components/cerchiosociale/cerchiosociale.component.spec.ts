import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerchiosocialeComponent } from './cerchiosociale.component';

describe('CerchiosocialeComponent', () => {
  let component: CerchiosocialeComponent;
  let fixture: ComponentFixture<CerchiosocialeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CerchiosocialeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CerchiosocialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
