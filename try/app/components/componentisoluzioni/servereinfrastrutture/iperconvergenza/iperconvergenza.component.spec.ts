import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IperconvergenzaComponent } from './iperconvergenza.component';

describe('IperconvergenzaComponent', () => {
  let component: IperconvergenzaComponent;
  let fixture: ComponentFixture<IperconvergenzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IperconvergenzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IperconvergenzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
