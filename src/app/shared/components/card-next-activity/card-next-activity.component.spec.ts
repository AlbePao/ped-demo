import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardNextActivityComponent } from './card-next-activity.component';

describe('CardNextActivityComponent', () => {
  let component: CardNextActivityComponent;
  let fixture: ComponentFixture<CardNextActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardNextActivityComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNextActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
