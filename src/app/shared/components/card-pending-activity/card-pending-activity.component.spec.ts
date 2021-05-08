import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardPendingActivityComponent } from './card-pending-activity.component';

describe('CardPendingActivityComponent', () => {
  let component: CardPendingActivityComponent;
  let fixture: ComponentFixture<CardPendingActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardPendingActivityComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPendingActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
