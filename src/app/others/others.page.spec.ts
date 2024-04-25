import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OthersPage } from './others.page';

describe('OthersPage', () => {
  let component: OthersPage;
  let fixture: ComponentFixture<OthersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OthersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
