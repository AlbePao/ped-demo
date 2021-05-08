import { Injectable } from '@angular/core';
import { Activity } from '@app/shared/interfaces/activity';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {
  constructor() {}

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
        status: 'accepted',
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
        status: 'accepted',
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
        status: 'pending',
        peopleBefore: 2,
        club: 'Ravizza',
        room: 'Conscious',
      },
    ]);
  }
}
