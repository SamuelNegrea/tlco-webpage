import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Backup3Component } from './backup3.component';

describe('Backup3Component', () => {
  let component: Backup3Component;
  let fixture: ComponentFixture<Backup3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Backup3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Backup3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
