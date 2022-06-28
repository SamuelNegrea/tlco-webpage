import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoconferenzaComponent } from './videoconferenza.component';

describe('VideoconferenzaComponent', () => {
  let component: VideoconferenzaComponent;
  let fixture: ComponentFixture<VideoconferenzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoconferenzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoconferenzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
