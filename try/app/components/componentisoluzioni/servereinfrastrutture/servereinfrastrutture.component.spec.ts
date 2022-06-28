import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServereinfrastruttureComponent } from './servereinfrastrutture.component';

describe('ServereinfrastruttureComponent', () => {
  let component: ServereinfrastruttureComponent;
  let fixture: ComponentFixture<ServereinfrastruttureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServereinfrastruttureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServereinfrastruttureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
