declare interface Collaborator {
  id: string;
  name: string;
  avatar: string;
  company: string;
  role: string;
  createdAt: string;
}

declare interface Feedback {
  id?: string;
  collaboratorId?: string;
  createdAt?: string;
  message?: string;
  like?: number;
}
