import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntispamComponent } from './antispam.component';

describe('AntispamComponent', () => {
  let component: AntispamComponent;
  let fixture: ComponentFixture<AntispamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntispamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntispamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
