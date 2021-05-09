import { Component, Input } from '@angular/core';
import { Announcement } from '@app/shared/interfaces/announcement';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss'],
})
export class AnnouncementsComponent {
  @Input() announcements: Announcement[] | null = [];
}
