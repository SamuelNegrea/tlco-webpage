import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TessereHomeMobileComponent } from './tessere-home-mobile.component';

describe('TessereHomeMobileComponent', () => {
  let component: TessereHomeMobileComponent;
  let fixture: ComponentFixture<TessereHomeMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TessereHomeMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TessereHomeMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
