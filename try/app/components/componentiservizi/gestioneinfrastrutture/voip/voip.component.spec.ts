import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VOIPComponent } from './voip.component';

describe('VOIPComponent', () => {
  let component: VOIPComponent;
  let fixture: ComponentFixture<VOIPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VOIPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VOIPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
