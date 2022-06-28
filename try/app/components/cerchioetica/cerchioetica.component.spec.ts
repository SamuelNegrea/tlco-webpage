import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerchioeticaComponent } from './cerchioetica.component';

describe('CerchioeticaComponent', () => {
  let component: CerchioeticaComponent;
  let fixture: ComponentFixture<CerchioeticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CerchioeticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CerchioeticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
