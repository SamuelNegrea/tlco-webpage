import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocazioneComponent } from './locazione.component';

describe('LocazioneComponent', () => {
  let component: LocazioneComponent;
  let fixture: ComponentFixture<LocazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocazioneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
