export interface Member {
  name: string;
  role: string;
  email: string;
}

export interface Committee {
  id: number;
  name: string;
  members: Member[];
}