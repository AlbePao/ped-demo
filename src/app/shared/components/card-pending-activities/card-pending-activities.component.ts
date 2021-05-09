import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Activity } from '@app/shared/interfaces/activity';

@Component({
  selector: 'app-card-pending-activities',
  templateUrl: './card-pending-activities.component.html',
  styleUrls: ['./card-pending-activities.component.scss'],
})
export class CardPendingActivitiesComponent {
  @Input() activities: Activity[] | null = [];
  @Output() cancel = new EventEmitter<number>();
}
