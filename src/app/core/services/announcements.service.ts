import { Injectable } from '@angular/core';
import { Announcement } from '@app/shared/interfaces/announcement';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnnouncementsService {
  constructor() {}

  getAnnouncements(): Observable<Announcement[]> {
    return of([
      {
        id: 1,
        title: 'Chiusura straordinaria per vacanze di Natale',
        date: new Date().toISOString().substring(0, 10),
        description:
          'Nullam id viverra neque, quis fermentum lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras ut dui vitae odio gravida pretium. Praesent iaculis ac ante id fringilla. Phasellus nec massa eget purus gravida hendrerit. Maecenas consectetur sit amet justo vel luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tristique eu lorem quis faucibus. Vestibulum quis nunc auctor, dictum dolor sit amet, lacinia neque. Sed commodo a tortor eget pretium. Curabitur sed tellus tristique, semper turpis interdum, elementum velit. Aenean pretium nunc sed neque dapibus, id gravida lacus accumsan.',
      },
      {
        id: 2,
        title: 'Chiusura straordinaria per vacanze di Natale',
        date: new Date().toISOString().substring(0, 10),
        description:
          'Nullam id viverra neque, quis fermentum lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras ut dui vitae odio gravida pretium. Praesent iaculis ac ante id fringilla. Phasellus nec massa eget purus gravida hendrerit. Maecenas consectetur sit amet justo vel luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tristique eu lorem quis faucibus. Vestibulum quis nunc auctor, dictum dolor sit amet, lacinia neque. Sed commodo a tortor eget pretium. Curabitur sed tellus tristique, semper turpis interdum, elementum velit. Aenean pretium nunc sed neque dapibus, id gravida lacus accumsan.',
      },
    ]);
  }
}
