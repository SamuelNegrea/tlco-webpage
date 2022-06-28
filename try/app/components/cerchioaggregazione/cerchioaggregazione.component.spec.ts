import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerchioaggregazioneComponent } from './cerchioaggregazione.component';

describe('CerchioaggregazioneComponent', () => {
  let component: CerchioaggregazioneComponent;
  let fixture: ComponentFixture<CerchioaggregazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CerchioaggregazioneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CerchioaggregazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
