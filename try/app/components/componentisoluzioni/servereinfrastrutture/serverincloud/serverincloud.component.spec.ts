import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerincloudComponent } from './serverincloud.component';

describe('ServerincloudComponent', () => {
  let component: ServerincloudComponent;
  let fixture: ComponentFixture<ServerincloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerincloudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerincloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
