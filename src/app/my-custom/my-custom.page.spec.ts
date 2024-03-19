import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyCustomPage } from './my-custom.page';

describe('MyCustomPage', () => {
  let component: MyCustomPage;
  let fixture: ComponentFixture<MyCustomPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyCustomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
