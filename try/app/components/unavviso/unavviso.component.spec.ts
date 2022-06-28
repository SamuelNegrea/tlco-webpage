import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnavvisoComponent } from './unavviso.component';

describe('UnavvisoComponent', () => {
  let component: UnavvisoComponent;
  let fixture: ComponentFixture<UnavvisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnavvisoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnavvisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
