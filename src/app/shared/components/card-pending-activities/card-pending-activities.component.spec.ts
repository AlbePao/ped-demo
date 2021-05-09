import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardPendingActivitiesComponent } from './card-pending-activities.component';

describe('CardPendingActivityComponent', () => {
  let component: CardPendingActivitiesComponent;
  let fixture: ComponentFixture<CardPendingActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardPendingActivitiesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPendingActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
