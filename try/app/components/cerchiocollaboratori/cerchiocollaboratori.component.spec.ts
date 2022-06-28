import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerchiocollaboratoriComponent } from './cerchiocollaboratori.component';

describe('CerchiocollaboratoriComponent', () => {
  let component: CerchiocollaboratoriComponent;
  let fixture: ComponentFixture<CerchiocollaboratoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CerchiocollaboratoriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CerchiocollaboratoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
