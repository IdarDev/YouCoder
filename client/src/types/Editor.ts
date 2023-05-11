type RecorderActions = {
  start: number;
  end: number;
  pauseArray: RecorderAction[];
  resumeArray: RecorderAction[];
  pauseLengthArray: number[];
  editorActions: EditorAction[];
  consoleLogOutputs: ConsoleLog[];
};

type ChangeRange = {
  startLineNumber: number;
  startColumn: number;
  endLineNumber: number;
  endColumn: number;
};

type EditorAction = ChangeRange & {
  actionCreationTimestamp: number;
  playbackTimestamp: number;
  text: string;
};

type RecorderAction = {
  timestamp: number;
};

type Language =
  | 'javascript'
  | 'python'
  | 'java'
  | 'csharp'
  | 'cpp'
  | 'ruby'
  | 'go';

type ConsoleLog = {
  text: string;
  timestamp: number;
  playbackTimestamp: number;
};

type EditorRecording = {
  title: string;
  description?: string;
  thumbnail_link?: string;
  language: string;
  recording_link: string;
};
