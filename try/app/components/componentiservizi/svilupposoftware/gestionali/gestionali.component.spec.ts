import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionaliComponent } from './gestionali.component';

describe('GestionaliComponent', () => {
  let component: GestionaliComponent;
  let fixture: ComponentFixture<GestionaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionaliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
