import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportoaitComponent } from './supportoait.component';

describe('SupportoaitComponent', () => {
  let component: SupportoaitComponent;
  let fixture: ComponentFixture<SupportoaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportoaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportoaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
