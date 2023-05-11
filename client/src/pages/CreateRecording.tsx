import React from 'react';
import { RecorderEditor } from '../components/RecorderEditor';
import TopNavBar from '../components/HomePageComponents/TopNavBar';

interface RecordingPageProps {}

const CreateRecordingPage: React.FC<RecordingPageProps> = ({}) => {
  // create a useEffect if there is a token in local storage and get the user data from the backend and update the store
  return (
    <>
      {' '}
      <div className='bg-bg-pri h-screen overflow-auto'>
        <TopNavBar
          showSearch={false}
          showCreateRecording={false}
          showDashboard={true}
          showFeatures={false}
          showExamples={true}
        />
        <div>Recording Page</div>
        <div className='w-full px-10 mx-auto'>
          <RecorderEditor />
        </div>
      </div>
    </>
  );
};

export default CreateRecordingPage;