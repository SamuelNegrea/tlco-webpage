import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerchiogiovaniComponent } from './cerchiogiovani.component';

describe('CerchiogiovaniComponent', () => {
  let component: CerchiogiovaniComponent;
  let fixture: ComponentFixture<CerchiogiovaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CerchiogiovaniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CerchiogiovaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
