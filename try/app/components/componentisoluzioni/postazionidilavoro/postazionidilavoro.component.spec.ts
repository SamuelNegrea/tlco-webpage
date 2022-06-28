import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostazionidilavoroComponent } from './postazionidilavoro.component';

describe('PostazionidilavoroComponent', () => {
  let component: PostazionidilavoroComponent;
  let fixture: ComponentFixture<PostazionidilavoroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostazionidilavoroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostazionidilavoroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
