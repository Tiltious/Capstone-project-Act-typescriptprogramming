import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpentryformComponent } from './empentryform.component';

describe('EmpentryformComponent', () => {
  let component: EmpentryformComponent;
  let fixture: ComponentFixture<EmpentryformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpentryformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpentryformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
