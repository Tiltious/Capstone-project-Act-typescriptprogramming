import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevupdateComponent } from './devupdate.component';

describe('DevupdateComponent', () => {
  let component: DevupdateComponent;
  let fixture: ComponentFixture<DevupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
