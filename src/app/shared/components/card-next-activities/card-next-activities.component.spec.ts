import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardNextActivitiesComponent } from './card-next-activities.component';

describe('CardNextActivitiesComponent', () => {
  let component: CardNextActivitiesComponent;
  let fixture: ComponentFixture<CardNextActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardNextActivitiesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNextActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
