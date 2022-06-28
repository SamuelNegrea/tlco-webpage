import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimoavvisoComponent } from './primoavviso.component';

describe('PrimoavvisoComponent', () => {
  let component: PrimoavvisoComponent;
  let fixture: ComponentFixture<PrimoavvisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimoavvisoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimoavvisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
