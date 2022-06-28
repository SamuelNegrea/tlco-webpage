import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMedioscreenComponent } from './carousel-medioscreen.component';

describe('CarouselMedioscreenComponent', () => {
  let component: CarouselMedioscreenComponent;
  let fixture: ComponentFixture<CarouselMedioscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselMedioscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselMedioscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
