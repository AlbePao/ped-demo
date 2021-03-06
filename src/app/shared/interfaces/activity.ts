export enum ActivityStatus {
  open,
  accepted,
  pending,
}

export interface Activity {
  id: number;
  title: string;
  image: string;
  date: string;
  timeStart: string;
  timeEnd: string;
  duration: string;
  category: string;
  status: ActivityStatus;
  peopleBefore?: number;
  club: string;
  room: string;
}
