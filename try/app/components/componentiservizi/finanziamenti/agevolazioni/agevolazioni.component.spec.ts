import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgevolazioniComponent } from './agevolazioni.component';

describe('AgevolazioniComponent', () => {
  let component: AgevolazioniComponent;
  let fixture: ComponentFixture<AgevolazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgevolazioniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgevolazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
