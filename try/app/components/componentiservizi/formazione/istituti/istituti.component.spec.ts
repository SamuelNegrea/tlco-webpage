import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IstitutiComponent } from './istituti.component';

describe('IstitutiComponent', () => {
  let component: IstitutiComponent;
  let fixture: ComponentFixture<IstitutiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IstitutiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IstitutiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
