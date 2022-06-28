import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulsantiesearchbarComponent } from './pulsantiesearchbar.component';

describe('PulsantiesearchbarComponent', () => {
  let component: PulsantiesearchbarComponent;
  let fixture: ComponentFixture<PulsantiesearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PulsantiesearchbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PulsantiesearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
