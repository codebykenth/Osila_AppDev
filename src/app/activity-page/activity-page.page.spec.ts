import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivityPagePage } from './activity-page.page';

describe('ActivityPagePage', () => {
  let component: ActivityPagePage;
  let fixture: ComponentFixture<ActivityPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ActivityPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
