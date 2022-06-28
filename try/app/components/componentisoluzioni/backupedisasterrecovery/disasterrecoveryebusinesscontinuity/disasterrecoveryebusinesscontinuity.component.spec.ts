import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisasterrecoveryebusinesscontinuityComponent } from './disasterrecoveryebusinesscontinuity.component';

describe('DisasterrecoveryebusinesscontinuityComponent', () => {
  let component: DisasterrecoveryebusinesscontinuityComponent;
  let fixture: ComponentFixture<DisasterrecoveryebusinesscontinuityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisasterrecoveryebusinesscontinuityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisasterrecoveryebusinesscontinuityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
