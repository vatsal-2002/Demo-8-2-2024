// import Meetingsettingsidebar from './meetingsettingsidebar';
// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';


// const Meetingsetting = () => {
//   const location = useLocation();
//   // const navigate = useNavigate();
//   // const [isToggled, setToggled] = useState(true);
//   const [meetingName, setMeetingName] = useState('');
//   const [meetingDuration, setMettingDuration] = useState('');
//   const [meetingLocation, setMettingLocation] = useState('');

//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const name = params.get('name');
//     const duration = params.get('duration');
//     const located = params.get('location');
//     setMeetingName(name || '');
//     setMettingDuration(duration || '');
//     setMettingLocation(located || '');
//   }, [location.search]);

//   // const handleToggle = () => {
//   //   setToggled(!isToggled);
//   // };

//   return (
//     <>
//       <div className="container-fuild">
//         <row className="d-flex">
//           <div className="col-3">
//             <div className="page-wrapper toggled">
//               <Meetingsettingsidebar />
//             </div>
//           </div>

//           <div className="col-9 d-flex align-items-center bg-soft-secondary">
//             <div className="container create-preview">
//               <div className='row d-flex'>
//                 <p>
//                   This is a preview. To book an event, share the link with
//                   your invitees.
//                 </p>
//                 <div className="col-6 d-flex flex-column p-4">
//                   <label>MEET PATEL</label>
//                   <h3>{meetingName}</h3>
//                   <label><span className="mdi mdi-clock-time-five-outline"></span>{meetingDuration} min</label>
//                   <label><span className="mdi mdi-map-marker"></span>{meetingLocation}</label>
//                 </div>
//                 <div className="col-6 d-flex align-items-center justify-content-center h-550 preview-right">
//                   <h5 className='text-center'>A preview of your availability will show on the next step</h5>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </row>
//       </div>
//     </>
//   );

// }

// export default Meetingsetting

import Meetingsettingsidebar from './meetingsettingsidebar';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'; // Importing useSelector hook

const Meetingsetting = () => {
  // Accessing currentMeeting from Redux store
  const currentMeeting = useSelector(state => state.meetings.currentMeeting);

  // useEffect(() => {
  //   // Fetch meeting details if currentMeeting exists
  //   if (currentMeeting) {
  //     // Fetch meeting details using currentMeeting.id
  //     fetchMeetingDetails(currentMeeting.id);
  //   }
  // }, [currentMeeting]);

  // const fetchMeetingDetails = async (meetingId) => {
  //   try {
  //     // Fetch meeting details using meetingId
  //     // Example fetch logic
  //     const response = await fetch(`http://localhost:8000/meetingSettings/${meetingId}`);
  //     const meetingDetails = await response.json();
  //     console.log("Meeting details:", meetingDetails);
  //     // Update state or perform other actions with meeting details
  //   } catch (error) {
  //     console.error("Error fetching meeting details:", error);
  //   }
  // };

  return (
    <>
      <div className="container-fuild">
        <row className="d-flex">
          <div className="col-3">
            <div className="page-wrapper toggled">
              <Meetingsettingsidebar />
            </div>
          </div>

          <div className="col-9 d-flex align-items-center bg-soft-secondary">
            <div className="container create-preview">
              <div className='row d-flex'>
                <p>
                  This is a preview. To book an event, share the link with
                  your invitees.
                </p>
                {/* Render meeting details */}
                <div className="col-6 d-flex flex-column p-4">
                  <label>MEET PATEL</label>
                  <h3>{currentMeeting ? currentMeeting.name : ''}</h3>
                  <label><span className="mdi mdi-clock-time-five-outline"></span>{currentMeeting ? currentMeeting.duration : ''} min</label>
                  <label><span className="mdi mdi-map-marker"></span>{currentMeeting ? currentMeeting.location : ''}</label>
                  {/* You can add more fields here as needed */}
                </div>
                {/* Render additional content */}
                <div className="col-6 d-flex align-items-center justify-content-center h-550 preview-right">
                  <h5 className='text-center'>A preview of your availability will show on the next step</h5>
                </div>
              </div>
            </div>
          </div>
        </row>
      </div>
    </>
  );
}

export default Meetingsetting;
