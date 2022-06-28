import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevenzioneComponent } from './prevenzione.component';

describe('PrevenzioneComponent', () => {
  let component: PrevenzioneComponent;
  let fixture: ComponentFixture<PrevenzioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevenzioneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevenzioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
