import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerchiopersonaComponent } from './cerchiopersona.component';

describe('CerchiopersonaComponent', () => {
  let component: CerchiopersonaComponent;
  let fixture: ComponentFixture<CerchiopersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CerchiopersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CerchiopersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
