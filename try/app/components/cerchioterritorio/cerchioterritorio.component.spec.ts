import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerchioterritorioComponent } from './cerchioterritorio.component';

describe('CerchioterritorioComponent', () => {
  let component: CerchioterritorioComponent;
  let fixture: ComponentFixture<CerchioterritorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CerchioterritorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CerchioterritorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
