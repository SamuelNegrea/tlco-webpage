import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StazioniappleewindowsComponent } from './stazioniappleewindows.component';

describe('StazioniappleewindowsComponent', () => {
  let component: StazioniappleewindowsComponent;
  let fixture: ComponentFixture<StazioniappleewindowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StazioniappleewindowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StazioniappleewindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
