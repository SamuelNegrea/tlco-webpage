import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperodatiComponent } from './recuperodati.component';

describe('RecuperodatiComponent', () => {
  let component: RecuperodatiComponent;
  let fixture: ComponentFixture<RecuperodatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuperodatiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperodatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
