import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupedisasterrecoveryComponent } from './backupedisasterrecovery.component';

describe('BackupedisasterrecoveryComponent', () => {
  let component: BackupedisasterrecoveryComponent;
  let fixture: ComponentFixture<BackupedisasterrecoveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackupedisasterrecoveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackupedisasterrecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
