export type Announcement = {
  result: Result[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

export type Result = {
  id: number;
  title: string;
  is_delete: boolean;
  description: string;
  event_date: null | string;
  event_time: null | string;
  event_location: null | string;
  created_at: string;
  updated_at: string;
  deleted_at: null | string;
  imageAnnouncements: string[];
};
