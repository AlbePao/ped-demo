export type ActivityStatus = 'accepted' | 'pending';

export interface Activity {
  id: number;
  title: string;
  date: string;
  timeStart: string;
  timeEnd: string;
  duration: string;
  status: ActivityStatus;
  peopleBefore?: number;
  club: string;
  room: string;
}
