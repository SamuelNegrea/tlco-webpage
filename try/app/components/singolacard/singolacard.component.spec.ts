import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingolacardComponent } from './singolacard.component';

describe('SingolacardComponent', () => {
  let component: SingolacardComponent;
  let fixture: ComponentFixture<SingolacardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingolacardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingolacardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
