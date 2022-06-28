import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SicurezzaComponent } from './sicurezza.component';

describe('SicurezzaComponent', () => {
  let component: SicurezzaComponent;
  let fixture: ComponentFixture<SicurezzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SicurezzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SicurezzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
