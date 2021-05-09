import { Component, Input } from '@angular/core';
import { Activity } from '@app/shared/interfaces/activity';

@Component({
  selector: 'app-card-next-activities',
  templateUrl: './card-next-activities.component.html',
  styleUrls: ['./card-next-activities.component.scss'],
})
export class CardNextActivitiesComponent {
  @Input() activities: Activity[] | null = [];
}
