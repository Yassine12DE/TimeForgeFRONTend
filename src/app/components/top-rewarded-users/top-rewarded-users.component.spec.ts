import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRewardedUsersComponent } from './top-rewarded-users.component';

describe('TopRewardedUsersComponent', () => {
  let component: TopRewardedUsersComponent;
  let fixture: ComponentFixture<TopRewardedUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopRewardedUsersComponent]
    });
    fixture = TestBed.createComponent(TopRewardedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
