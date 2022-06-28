import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiquadroinaltoComponent } from './riquadroinalto.component';

describe('RiquadroinaltoComponent', () => {
  let component: RiquadroinaltoComponent;
  let fixture: ComponentFixture<RiquadroinaltoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiquadroinaltoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiquadroinaltoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
