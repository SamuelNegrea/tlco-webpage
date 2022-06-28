import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvilupposoftwareComponent } from './svilupposoftware.component';

describe('SvilupposoftwareComponent', () => {
  let component: SvilupposoftwareComponent;
  let fixture: ComponentFixture<SvilupposoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvilupposoftwareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvilupposoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
