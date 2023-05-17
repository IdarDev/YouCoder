import { RecorderAction } from './Editor';

export interface Creator {
  uid?: string;
  username?: string;
  email?: string;
  join_date: string;
  recordings?: Recording[];
  shortName?: string;
  display_name?: string;
  picture?: string;
}

export const rootUser: Creator = {
  shortName: '',
  uid: '',
  display_name: '',
  email: '',
  join_date: '',
  recordings: [],
};

export interface Recording {
  created_at: string;
<<<<<<< Updated upstream
  creator?: { picture: string; display_name: string; uid: string };
=======
  creator?: {
    socials: any; picture: string; display_name: string; uid: string 
};
>>>>>>> Stashed changes
  creator_uid: string;
  description: string;
  full_link: string;
  iframe_link: string;
  language: string;
  published: boolean;
  recording_id: string;
  recording_link: string;
  thumbnail_link: string;
  title: string;
  duration: number;
  like_count: number;
  tags: string[];
  view_count: number;
  time_since_creation: string;
}

export interface updateRecording {
  title?: string;
  description?: string;
  published?: boolean;
  thumbnail_link?: string;
}
