import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TessereHomeComponent } from './tessere-home.component';

describe('TessereHomeComponent', () => {
  let component: TessereHomeComponent;
  let fixture: ComponentFixture<TessereHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TessereHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TessereHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
