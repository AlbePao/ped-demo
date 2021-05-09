import { Injectable } from '@angular/core';
import { Activity, ActivityStatus } from '@app/shared/interfaces/activity';
import { Observable, of } from 'rxjs';
import { concatMap, filter, toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {
  constructor() {}

  getActivites(club: string, category: string, activityType: string): Observable<Activity[]> {
    return of([
      {
        id: 1,
        title: 'Postural Training',
        image: 'https://picsum.photos/400/200',
        date: new Date().toISOString().substring(0, 10),
        timeStart: '11:10',
        timeEnd: '11:40',
        duration: '30',
        category: '',
        status: ActivityStatus.open,
        club: 'Ravizza',
        room: 'Conscious',
      },
    ]).pipe(
      concatMap((activities) => activities),
      filter((activity) => activity.club === club && activity.category === category && activity.title === activityType),
      toArray(),
    );
  }

  getUserActivities(): Observable<Activity[]> {
    return of([
      {
        id: 1,
        title: 'Postural Training',
        image: 'https://picsum.photos/400/200',
        date: new Date().toISOString().substring(0, 10),
        timeStart: '11:10',
        timeEnd: '11:40',
        duration: '30',
        category: '',
        status: ActivityStatus.accepted,
        club: 'Ravizza',
        room: 'Conscious',
      },
      {
        id: 2,
        title: 'Postural Training',
        image: 'https://picsum.photos/400/200',
        date: new Date().toISOString().substring(0, 10),
        timeStart: '11:10',
        timeEnd: '11:40',
        duration: '30',
        category: '',
        status: ActivityStatus.accepted,
        club: 'Ravizza',
        room: 'Conscious',
      },
      {
        id: 3,
        title: 'Postural Training',
        image: 'https://picsum.photos/400/200',
        date: new Date().toISOString().substring(0, 10),
        timeStart: '11:10',
        timeEnd: '11:40',
        duration: '30',
        category: '',
        status: ActivityStatus.pending,
        peopleBefore: 2,
        club: 'Ravizza',
        room: 'Conscious',
      },
    ]);
  }
}
