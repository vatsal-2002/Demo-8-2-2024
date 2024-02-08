// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import EditMeetingsidebar from './editmeetingsidebar';

// const Editmeeting = () => {
//     const [meetingName, setMeetingName] = useState("");
//     const [selectedDuration, setSelectedDuration] = useState("15");
//     const [meetingLocation, setMeetingLocation] = useState("google_meet");
//     const location = useLocation(); // Get the current location

//     const queryParams = new URLSearchParams(location.search);
//     const meetingNameFromParams = queryParams.get('name');
//     const meetingDurationFromParams = queryParams.get('duration');
//     const meetingLocationFromParams = queryParams.get('location');

//     useEffect(() => {
//         setMeetingName(meetingNameFromParams || '');
//         setSelectedDuration(meetingDurationFromParams || '15');
//         setMeetingLocation(meetingLocationFromParams || 'google_meet');
//     }, [meetingNameFromParams, meetingDurationFromParams, meetingLocationFromParams]);

//     const handleMeetingNameChange = (event) => {
//         setMeetingName(event.target.value);
//     };

//     const handleDurationChange = (event) => {
//         setSelectedDuration(event.target.value);
//     };

//     const handleLocationChange = (event) => {
//         setMeetingLocation(event.target.value);
//     };

//     return (
//         <>
//             <div className="container-fuild">
//                 <row className="d-flex">
//                     <div className="col-3">
//                         <div className="page-wrapper toggled">
//                             <EditMeetingsidebar
//                                 meetingName={meetingName}
//                                 setMeetingName={setMeetingName}
//                                 selectedDuration={selectedDuration}
//                                 setSelectedDuration={setSelectedDuration}
//                                 meetingLocation={meetingLocation}
//                                 setMeetingLocation={setMeetingLocation}
//                             />
//                         </div>
//                         {/* col-4 */}
//                     </div>

//                     <div className="col-9 d-flex align-items-center bg-soft-secondary">
//                         <div className="container create-preview">
//                             <div className='row d-flex'>
//                                 <p>
//                                     This is a preview. To book an event, share the link with
//                                     your invitees.
//                                 </p>
//                                 <div className="col-6 d-flex flex-column p-4">
//                                     <label>MEET PATEL</label>
//                                     <h3>{meetingName}</h3>
//                                     <label><span className="mdi mdi-clock-time-five-outline"></span>{selectedDuration} min</label>
//                                     <label><span className="mdi mdi-map-marker"></span>{meetingLocation}</label>
//                                 </div>
//                                 <div className="col-6 d-flex align-items-center justify-content-center h-550 preview-right">
//                                     <h5 className='text-center'>A preview of your availability will show on the next step</h5>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </row>
//             </div>
//         </>
//     );

// }

// export default Editmeeting;

// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import EditMeetingsidebar from './editmeetingsidebar';
// import { useSelector, useDispatch } from 'react-redux';
// import { setMeetingDetails } from './actions/meetingActions'; // Import action to set meeting details

// const Editmeeting = () => {
//     const dispatch = useDispatch();
//     const location = useLocation(); // Get the current location

//     // Retrieve meeting details from Redux store
//     const meetingDetails = useSelector(state => state.meetings.currentMeeting);

//     const [meetingName, setMeetingName] = useState("");
//     const [selectedDuration, setSelectedDuration] = useState("15");
//     const [meetingLocation, setMeetingLocation] = useState("google_meet");

//     useEffect(() => {
//         // Set meeting details from Redux store if available
//         if (meetingDetails) {
//             setMeetingName(meetingDetails.name || "");
//             setSelectedDuration(meetingDetails.duration || "15");
//             setMeetingLocation(meetingDetails.location || "google_meet");
//         } else {
//             // If meeting details not available in Redux store, fetch from URL parameters
//             const queryParams = new URLSearchParams(location.search);
//             setMeetingName(queryParams.get('name') || '');
//             setSelectedDuration(queryParams.get('duration') || '15');
//             setMeetingLocation(queryParams.get('location') || 'google_meet');
//         }
//     }, [location.search, meetingDetails]);

//     // Dispatch action to update meeting details in Redux store
//     useEffect(() => {
//         const updatedMeetingDetails = {
//             name: meetingName,
//             duration: selectedDuration,
//             location: meetingLocation,
//         };
//         dispatch(setMeetingDetails(updatedMeetingDetails));
//     }, [meetingName, selectedDuration, meetingLocation]);

//     const handleMeetingNameChange = (event) => {
//         setMeetingName(event.target.value);
//     };

//     const handleDurationChange = (event) => {
//         setSelectedDuration(event.target.value);
//     };

//     const handleLocationChange = (event) => {
//         setMeetingLocation(event.target.value);
//     };

//     return (
//         <>
//             <div className="container-fuild">
//                 <row className="d-flex">
//                     <div className="col-3">
//                         <div className="page-wrapper toggled">
//                             <EditMeetingsidebar
//                                 meetingName={meetingName}
//                                 setMeetingName={setMeetingName}
//                                 selectedDuration={selectedDuration}
//                                 setSelectedDuration={setSelectedDuration}
//                                 meetingLocation={meetingLocation}
//                                 setMeetingLocation={setMeetingLocation}
//                             />
//                         </div>
//                         {/* col-4 */}
//                     </div>

//                     <div className="col-9 d-flex align-items-center bg-soft-secondary">
//                         <div className="container create-preview">
//                             <div className='row d-flex'>
//                                 <p>
//                                     This is a preview. To book an event, share the link with
//                                     your invitees.
//                                 </p>
//                                 <div className="col-6 d-flex flex-column p-4">
//                                     <label>MEET PATEL</label>
//                                     <h3>{meetingName}</h3>
//                                     <label><span className="mdi mdi-clock-time-five-outline"></span>{selectedDuration} min</label>
//                                     <label><span className="mdi mdi-map-marker"></span>{meetingLocation}</label>
//                                 </div>
//                                 <div className="col-6 d-flex align-items-center justify-content-center h-550 preview-right">
//                                     <h5 className='text-center'>A preview of your availability will show on the next step</h5>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </row>
//             </div>
//         </>
//     );

// }

// export default Editmeeting;

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import EditMeetingsidebar from './editmeetingsidebar';
import { useSelector, useDispatch } from 'react-redux';
import { setMeetingDetails } from './actions/meetingActions'; // Import action to set meeting details

const Editmeeting = () => {
    const dispatch = useDispatch();
    const location = useLocation(); // Get the current location

    // Retrieve meeting details from Redux store
    const meetingDetails = useSelector(state => state.meetings.currentMeeting);

    const [meetingName, setMeetingName] = useState("");
    const [selectedDuration, setSelectedDuration] = useState("15");
    const [meetingLocation, setMeetingLocation] = useState("google_meet");

    useEffect(() => {
        // Set meeting details from Redux store if available
        if (meetingDetails) {
            setMeetingName(meetingDetails.name || "");
            setSelectedDuration(meetingDetails.duration || "15");
            setMeetingLocation(meetingDetails.location || "google_meet");
        } else {
            // If meeting details not available in Redux store, fetch from URL parameters
            const queryParams = new URLSearchParams(location.search);
            setMeetingName(queryParams.get('name') || '');
            setSelectedDuration(queryParams.get('duration') || '15');
            setMeetingLocation(queryParams.get('location') || 'google_meet');
        }
    }, [location.search, meetingDetails]);

    // Dispatch action to update meeting details in Redux store whenever there's a change in input fields
    const updateMeetingDetails = () => {
        const updatedMeetingDetails = {
            name: meetingName,
            duration: selectedDuration,
            location: meetingLocation,
        };
        dispatch(setMeetingDetails(updatedMeetingDetails));
    };

    const handleMeetingNameChange = (event) => {
        setMeetingName(event.target.value);
        updateMeetingDetails();
    };

    const handleDurationChange = (event) => {
        setSelectedDuration(event.target.value);
        updateMeetingDetails();
    };

    const handleLocationChange = (event) => {
        setMeetingLocation(event.target.value);
        updateMeetingDetails();
    };

    return (
        <>
            <div className="container-fuild">
                <row className="d-flex">
                    <div className="col-3">
                        <div className="page-wrapper toggled">
                            <EditMeetingsidebar
                                meetingName={meetingName}
                                setMeetingName={setMeetingName}
                                selectedDuration={selectedDuration}
                                setSelectedDuration={setSelectedDuration}
                                meetingLocation={meetingLocation}
                                setMeetingLocation={setMeetingLocation}
                            />
                        </div>
                        {/* col-4 */}
                    </div>

                    <div className="col-9 d-flex align-items-center bg-soft-secondary">
                        <div className="container create-preview">
                            <div className='row d-flex'>
                                <p>
                                    This is a preview. To book an event, share the link with
                                    your invitees.
                                </p>
                                <div className="col-6 d-flex flex-column p-4">
                                    <label>MEET PATEL</label>
                                    <h3>{meetingName}</h3>
                                    <label><span className="mdi mdi-clock-time-five-outline"></span>{selectedDuration} min</label>
                                    <label><span className="mdi mdi-map-marker"></span>{meetingLocation}</label>
                                </div>
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

export default Editmeeting;
