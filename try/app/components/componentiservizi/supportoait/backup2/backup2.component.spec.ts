import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Backup2Component } from './backup2.component';

describe('Backup2Component', () => {
  let component: Backup2Component;
  let fixture: ComponentFixture<Backup2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Backup2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Backup2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
