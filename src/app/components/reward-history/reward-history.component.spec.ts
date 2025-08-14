import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardHistoryComponent } from './reward-history.component';

describe('RewardHistoryComponent', () => {
  let component: RewardHistoryComponent;
  let fixture: ComponentFixture<RewardHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RewardHistoryComponent]
    });
    fixture = TestBed.createComponent(RewardHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
