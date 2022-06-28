import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioneinfrastruttureComponent } from './gestioneinfrastrutture.component';

describe('GestioneinfrastruttureComponent', () => {
  let component: GestioneinfrastruttureComponent;
  let fixture: ComponentFixture<GestioneinfrastruttureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestioneinfrastruttureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioneinfrastruttureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
