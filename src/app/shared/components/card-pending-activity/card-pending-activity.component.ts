import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Activity } from '@app/shared/interfaces/activity';

@Component({
  selector: 'app-card-pending-activity',
  templateUrl: './card-pending-activity.component.html',
  styleUrls: ['./card-pending-activity.component.scss'],
})
export class CardPendingActivityComponent {
  @Input() activity!: Activity;
  @Output() cancel = new EventEmitter<number>();
}
