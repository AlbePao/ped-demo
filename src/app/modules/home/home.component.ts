import { Component } from '@angular/core';
import { ActivitiesService } from '@app/core/services/activities.service';
import { AnnouncementsService } from '@app/core/services/announcements.service';
import { NewsService } from '@app/core/services/news.service';
import { map, share, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  activities$ = this.activitesService.getUserActivities().pipe(share());
  announcements$ = this.announcementsService.getAnnouncements();
  news$ = this.newsService.getNews();

  nextActivities$ = this.activities$.pipe(
    map((activities) => activities.filter((activity) => activity.status === 'accepted')),
  );

  pendingActivities$ = this.activities$.pipe(
    map((activities) => activities.filter((activity) => activity.status === 'pending')),
    shareReplay(),
  );

  constructor(
    private readonly activitesService: ActivitiesService,
    private readonly announcementsService: AnnouncementsService,
    private readonly newsService: NewsService,
  ) {}

  cancelBooking(activityId: number): void {
    console.log(`Deleted activity with id ${activityId}`);
  }
}
