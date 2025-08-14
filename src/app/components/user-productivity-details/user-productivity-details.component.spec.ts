import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProductivityDetailsComponent } from './user-productivity-details.component';

describe('UserProductivityDetailsComponent', () => {
  let component: UserProductivityDetailsComponent;
  let fixture: ComponentFixture<UserProductivityDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProductivityDetailsComponent]
    });
    fixture = TestBed.createComponent(UserProductivityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
