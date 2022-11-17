import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthActivityComponent } from './health-activity.component';

describe('HealthActivityComponent', () => {
  let component: HealthActivityComponent;
  let fixture: ComponentFixture<HealthActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
