import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnavvisopernewscomponentsComponent } from './unavvisopernewscomponents.component';

describe('UnavvisopernewscomponentsComponent', () => {
  let component: UnavvisopernewscomponentsComponent;
  let fixture: ComponentFixture<UnavvisopernewscomponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnavvisopernewscomponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnavvisopernewscomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
