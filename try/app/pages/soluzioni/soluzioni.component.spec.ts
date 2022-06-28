import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoluzioniComponent } from './soluzioni.component';

describe('SoluzioniComponent', () => {
  let component: SoluzioniComponent;
  let fixture: ComponentFixture<SoluzioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoluzioniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoluzioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
