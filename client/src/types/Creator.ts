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
  recording_id: string;
  creator: Creator;
  creator_uid: string;
  thumbnail_link: string;
  title: string;
  description: string;
  published: boolean;
  language: string;
  recorder_actions: RecorderAction[];
  audio_link: string;
  created_at: string;
  full_link: string;
  iframe_link: string;
}

export interface updateRecording {
  title?: string;
  description?: string;
  published?: boolean;
  thumbnail_link?: string;
}