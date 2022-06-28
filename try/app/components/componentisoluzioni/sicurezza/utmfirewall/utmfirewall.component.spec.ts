import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtmfirewallComponent } from './utmfirewall.component';

describe('UtmfirewallComponent', () => {
  let component: UtmfirewallComponent;
  let fixture: ComponentFixture<UtmfirewallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtmfirewallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtmfirewallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
