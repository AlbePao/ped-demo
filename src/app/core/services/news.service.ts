import { Injectable } from '@angular/core';
import { News } from '@app/shared/interfaces/news';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor() {}

  getNews(): Observable<News[]> {
    return of([
      {
        id: 1,
        title: 'Gli eventi di dicembre e gennaio',
        image: 'https://picsum.photos/300/200',
        date: new Date().toISOString().substring(0, 10),
        description:
          'Nullam id viverra neque, quis fermentum lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras ut dui vitae odio gravida pretium. Praesent iaculis ac ante id fringilla. Phasellus nec massa eget purus gravida hendrerit. Maecenas consectetur sit amet justo vel luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tristique eu lorem quis faucibus. Vestibulum quis nunc auctor, dictum dolor sit amet, lacinia neque. Sed commodo a tortor eget pretium. Curabitur sed tellus tristique, semper turpis interdum, elementum velit. Aenean pretium nunc sed neque dapibus, id gravida lacus accumsan.',
      },
      {
        id: 2,
        title: 'Gli eventi di dicembre e gennaio',
        image: 'https://picsum.photos/300/200',
        date: new Date().toISOString().substring(0, 10),
        description:
          'Nullam id viverra neque, quis fermentum lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras ut dui vitae odio gravida pretium. Praesent iaculis ac ante id fringilla. Phasellus nec massa eget purus gravida hendrerit. Maecenas consectetur sit amet justo vel luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tristique eu lorem quis faucibus. Vestibulum quis nunc auctor, dictum dolor sit amet, lacinia neque. Sed commodo a tortor eget pretium. Curabitur sed tellus tristique, semper turpis interdum, elementum velit. Aenean pretium nunc sed neque dapibus, id gravida lacus accumsan.',
      },
      {
        id: 3,
        title: 'Gli eventi di dicembre e gennaio',
        image: 'https://picsum.photos/300/200',
        date: new Date().toISOString().substring(0, 10),
        description:
          'Nullam id viverra neque, quis fermentum lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras ut dui vitae odio gravida pretium. Praesent iaculis ac ante id fringilla. Phasellus nec massa eget purus gravida hendrerit. Maecenas consectetur sit amet justo vel luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tristique eu lorem quis faucibus. Vestibulum quis nunc auctor, dictum dolor sit amet, lacinia neque. Sed commodo a tortor eget pretium. Curabitur sed tellus tristique, semper turpis interdum, elementum velit. Aenean pretium nunc sed neque dapibus, id gravida lacus accumsan.',
      },
      {
        id: 4,
        title: 'Gli eventi di dicembre e gennaio',
        image: 'https://picsum.photos/300/200',
        date: new Date().toISOString().substring(0, 10),
        description:
          'Nullam id viverra neque, quis fermentum lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras ut dui vitae odio gravida pretium. Praesent iaculis ac ante id fringilla. Phasellus nec massa eget purus gravida hendrerit. Maecenas consectetur sit amet justo vel luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tristique eu lorem quis faucibus. Vestibulum quis nunc auctor, dictum dolor sit amet, lacinia neque. Sed commodo a tortor eget pretium. Curabitur sed tellus tristique, semper turpis interdum, elementum velit. Aenean pretium nunc sed neque dapibus, id gravida lacus accumsan.',
      },
      {
        id: 5,
        title: 'Gli eventi di dicembre e gennaio',
        image: 'https://picsum.photos/300/200',
        date: new Date().toISOString().substring(0, 10),
        description:
          'Nullam id viverra neque, quis fermentum lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras ut dui vitae odio gravida pretium. Praesent iaculis ac ante id fringilla. Phasellus nec massa eget purus gravida hendrerit. Maecenas consectetur sit amet justo vel luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tristique eu lorem quis faucibus. Vestibulum quis nunc auctor, dictum dolor sit amet, lacinia neque. Sed commodo a tortor eget pretium. Curabitur sed tellus tristique, semper turpis interdum, elementum velit. Aenean pretium nunc sed neque dapibus, id gravida lacus accumsan.',
      },
      {
        id: 6,
        title: 'Gli eventi di dicembre e gennaio',
        image: 'https://picsum.photos/300/200',
        date: new Date().toISOString().substring(0, 10),
        description:
          'Nullam id viverra neque, quis fermentum lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras ut dui vitae odio gravida pretium. Praesent iaculis ac ante id fringilla. Phasellus nec massa eget purus gravida hendrerit. Maecenas consectetur sit amet justo vel luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tristique eu lorem quis faucibus. Vestibulum quis nunc auctor, dictum dolor sit amet, lacinia neque. Sed commodo a tortor eget pretium. Curabitur sed tellus tristique, semper turpis interdum, elementum velit. Aenean pretium nunc sed neque dapibus, id gravida lacus accumsan.',
      },
      {
        id: 7,
        title: 'Gli eventi di dicembre e gennaio',
        image: 'https://picsum.photos/300/200',
        date: new Date().toISOString().substring(0, 10),
        description:
          'Nullam id viverra neque, quis fermentum lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras ut dui vitae odio gravida pretium. Praesent iaculis ac ante id fringilla. Phasellus nec massa eget purus gravida hendrerit. Maecenas consectetur sit amet justo vel luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tristique eu lorem quis faucibus. Vestibulum quis nunc auctor, dictum dolor sit amet, lacinia neque. Sed commodo a tortor eget pretium. Curabitur sed tellus tristique, semper turpis interdum, elementum velit. Aenean pretium nunc sed neque dapibus, id gravida lacus accumsan.',
      },
      {
        id: 8,
        title: 'Gli eventi di dicembre e gennaio',
        image: 'https://picsum.photos/300/200',
        date: new Date().toISOString().substring(0, 10),
        description:
          'Nullam id viverra neque, quis fermentum lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras ut dui vitae odio gravida pretium. Praesent iaculis ac ante id fringilla. Phasellus nec massa eget purus gravida hendrerit. Maecenas consectetur sit amet justo vel luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tristique eu lorem quis faucibus. Vestibulum quis nunc auctor, dictum dolor sit amet, lacinia neque. Sed commodo a tortor eget pretium. Curabitur sed tellus tristique, semper turpis interdum, elementum velit. Aenean pretium nunc sed neque dapibus, id gravida lacus accumsan.',
      },
      {
        id: 9,
        title: 'Gli eventi di dicembre e gennaio',
        image: 'https://picsum.photos/300/200',
        date: new Date().toISOString().substring(0, 10),
        description:
          'Nullam id viverra neque, quis fermentum lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras ut dui vitae odio gravida pretium. Praesent iaculis ac ante id fringilla. Phasellus nec massa eget purus gravida hendrerit. Maecenas consectetur sit amet justo vel luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tristique eu lorem quis faucibus. Vestibulum quis nunc auctor, dictum dolor sit amet, lacinia neque. Sed commodo a tortor eget pretium. Curabitur sed tellus tristique, semper turpis interdum, elementum velit. Aenean pretium nunc sed neque dapibus, id gravida lacus accumsan.',
      },
      {
        id: 10,
        title: 'Gli eventi di dicembre e gennaio',
        image: 'https://picsum.photos/300/200',
        date: new Date().toISOString().substring(0, 10),
        description:
          'Nullam id viverra neque, quis fermentum lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras ut dui vitae odio gravida pretium. Praesent iaculis ac ante id fringilla. Phasellus nec massa eget purus gravida hendrerit. Maecenas consectetur sit amet justo vel luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tristique eu lorem quis faucibus. Vestibulum quis nunc auctor, dictum dolor sit amet, lacinia neque. Sed commodo a tortor eget pretium. Curabitur sed tellus tristique, semper turpis interdum, elementum velit. Aenean pretium nunc sed neque dapibus, id gravida lacus accumsan.',
      },
    ]);
  }
}
