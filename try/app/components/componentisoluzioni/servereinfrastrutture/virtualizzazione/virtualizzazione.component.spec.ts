import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualizzazioneComponent } from './virtualizzazione.component';

describe('VirtualizzazioneComponent', () => {
  let component: VirtualizzazioneComponent;
  let fixture: ComponentFixture<VirtualizzazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualizzazioneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualizzazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
