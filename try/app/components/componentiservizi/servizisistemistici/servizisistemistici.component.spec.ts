import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServizisistemisticiComponent } from './servizisistemistici.component';

describe('ServizisistemisticiComponent', () => {
  let component: ServizisistemisticiComponent;
  let fixture: ComponentFixture<ServizisistemisticiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServizisistemisticiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServizisistemisticiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
