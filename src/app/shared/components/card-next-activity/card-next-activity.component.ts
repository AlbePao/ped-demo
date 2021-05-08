import { Component, Input } from '@angular/core';
import { Activity } from '@app/shared/interfaces/activity';

@Component({
  selector: 'app-card-next-activity',
  templateUrl: './card-next-activity.component.html',
  styleUrls: ['./card-next-activity.component.scss'],
})
export class CardNextActivityComponent {
  @Input() activity!: Activity;
}
