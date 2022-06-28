import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EticaComponent } from './etica.component';

describe('EticaComponent', () => {
  let component: EticaComponent;
  let fixture: ComponentFixture<EticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
