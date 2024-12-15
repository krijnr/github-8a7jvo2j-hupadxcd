export interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  location?: string;
  committee?: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}