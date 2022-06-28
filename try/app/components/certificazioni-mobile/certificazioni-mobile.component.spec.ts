import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificazioniMobileComponent } from './certificazioni-mobile.component';

describe('CertificazioniMobileComponent', () => {
  let component: CertificazioniMobileComponent;
  let fixture: ComponentFixture<CertificazioniMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificazioniMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificazioniMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
