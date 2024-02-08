// // import React, { useState, useEffect } from 'react';
// // import { Link, useLocation, useNavigate } from 'react-router-dom';

// // const EditMeetingsidebar = ({
// //     meetingName,
// //     setMeetingName,
// //     selectedDuration,
// //     setSelectedDuration,
// //     meetingLocation,
// //     setMeetingLocation
// // }) => {
// //     const [showCustomDuration, setShowCustomDuration] = useState(false);
// //     const [error, setError] = useState(null); // State to store error
// //     const navigate = useNavigate(); // Get the navigate function from useNavigate hook
// //     const location = useLocation(); // Get the current location

// //     const queryParams = new URLSearchParams(location.search);
// //     const meetingId = queryParams.get('id');
// //     const meetingNameFromParams = queryParams.get('name');
// //     const meetingDurationFromParams = queryParams.get('duration');
// //     const meetingLocationFromParams = queryParams.get('location');

// //     useEffect(() => {
// //         setMeetingName(meetingNameFromParams || '');
// //         setSelectedDuration(meetingDurationFromParams || '15');
// //         setMeetingLocation(meetingLocationFromParams || 'google_meet');
// //     }, [meetingNameFromParams, meetingDurationFromParams, meetingLocationFromParams]);

// //     const handleDurationChange = (event) => {
// //         const duration = event.target.value;
// //         setSelectedDuration(duration);
// //         setShowCustomDuration(duration === 'Custom');
// //     };

// //     const handleContinue = async () => {
// //         const userToken = sessionStorage.getItem('userToken');

// //         if (!userToken) {
// //             throw new Error('Token not found');
// //         }

// //         const decodeToken = (userToken) => {
// //             try {
// //                 const [header, payload, signature] = userToken.split('.');
// //                 const decodedPayload = JSON.parse(atob(payload)); // Decoding Base64 URL encoded payload

// //                 return decodedPayload;
// //             } catch (error) {
// //                 console.error('Error decoding token:', error);
// //                 return null;
// //             }
// //         };

// //         const decodedToken = decodeToken(userToken);

// //         const meetingData = {
// //             userId: meetingId,
// //             scheduleId: null,
// //             name: meetingName,
// //             duration: selectedDuration,
// //             location: 'google_meet',
// //             link: null
// //         };
// //         try {
// //             const response = await fetch(`http://localhost:8000/meetingSettings/${meetingId}`, {
// //                 method: 'PATCH',
// //                 headers: {
// //                     'Content-Type': 'application/json',
// //                     'Authorization': userToken
// //                 },
// //                 body: JSON.stringify(meetingData)
// //             });
// //             if (response.status === 200) {
// //                 // Meeting updated successfully
// //                 // Optionally, you can redirect the user to another page
// //                 navigate(`/meetingsetting?id=${meetingId}&name=${encodeURIComponent(meetingName)}&duration=${selectedDuration}&location=${meetingLocation}`);
// //             } else {
// //                 // Handle other status codes if needed
// //                 console.error('Failed to update meeting:', response.data.error);
// //             }
// //         } catch (error) {
// //             console.error('Error updating meeting:', error);
// //         }
// //     };

// //     const handleCancel = async () => {
// //         try {
// //             const params = new URLSearchParams(location.search);
// //             const meetingId = params.get('id');
// //             const userToken = sessionStorage.getItem('userToken');

// //             const response = await fetch(`http://localhost:8000/meetingSettings/${meetingId}`, {
// //                 method: 'GET',
// //                 headers: {
// //                     'Authorization': `${userToken}`
// //                 }
// //             });

// //             if (!response.ok) {
// //                 throw new Error('Failed to fetch meeting details');
// //             }

// //             const meetingDetails = await response.json();

// //             // Navigate to EditMeetingsidebar with meeting details as query parameters
// //             const queryParams = new URLSearchParams({
// //                 id: meetingDetails.id,
// //                 name: meetingDetails.name,
// //                 duration: meetingDetails.duration,
// //                 location: meetingDetails.location
// //             });
// //             navigate(`/meetingsetting?${queryParams.toString()}`);
// //         } catch (error) {
// //             console.error('Error fetching meeting details:', error.message);
// //         }
// //     };

// //     return (
// //         <>
// //             {error && <div>Error: {error}</div>}
// //             <div className="sidebar-block">
// //                 <nav id="sidebar" className="sidebar-wrapper toggled">
// //                     <div
// //                         className="sidebar-content"
// //                         data-simplebar=""
// //                         style={{ height: "calc(100% - 60px)" }}
// //                     >
// //                         <div className="create-meeting mt-3 p-3">
// //                             <button className="meeting-cancel" onClick={handleCancel}>
// //                                 <span className="mdi mdi-arrow-left-thick"></span>Cancel
// //                             </button>
// //                             <h4 className="mt-3">Edit Meeting</h4>
// //                         </div>
// //                         <hr />
// //                         <div className="d-flex flex-column meeting-detail p-4">
// //                             <label>Meeting name</label>
// //                             <input
// //                                 type="text"
// //                                 className="form-control mb-3"
// //                                 placeholder="Name your meeting"
// //                                 value={meetingName}
// //                                 onChange={(e) => setMeetingName(e.target.value)}
// //                             />

// //                             <label>Duration</label>
// //                             <select
// //                                 id="duration"
// //                                 className="custom-select"
// //                                 value={selectedDuration}
// //                                 onChange={handleDurationChange}
// //                             >
// //                                 <option value="15">15 min</option>
// //                                 <option value="30">30 min</option>
// //                                 <option value="45">45 min</option>
// //                                 <option value="60">60 min</option>
// //                                 <option value="Custom">Custom</option>
// //                             </select>
// //                             <br />

// //                             {showCustomDuration && (
// //                                 <div>
// //                                     <input
// //                                         type="text"
// //                                         className="form-control mb-3"
// //                                         placeholder="Enter duration in minutes"
// //                                     />
// //                                 </div>
// //                             )}

// //                             <label>Location</label>
// //                             <select
// //                                 id="location"
// //                                 className="custom-select"
// //                                 value={meetingLocation}
// //                                 onChange={(e) => setMeetingLocation(e.target.value)}
// //                             >
// //                                 <option value="googlemeet">Google Meet</option>
// //                             </select>
// //                         </div>
// //                     </div>
// //                     <div className="meeting-controller d-flex justify-content-end me-4">
// //                         <button className="meeting-cancel" onClick={handleCancel}>
// //                             <Link to="/meetingsetting" className="meeting-cancel">Cancel</Link>
// //                         </button>
// //                         <button className="btn btn-primary" onClick={handleContinue}>Save and close</button>
// //                     </div>
// //                 </nav>
// //             </div>
// //         </>
// //     );
// // };

// // export default EditMeetingsidebar;

// // import React, { useState, useEffect } from "react";
// // import { useSelector } from 'react-redux';
// // import { useLocation, useNavigate, Link } from "react-router-dom";

// // const EditMeetingsidebar = () => {
// //     const navigate = useNavigate();
// //     const location = useLocation();

// //     const currentMeeting = useSelector(state => state.meetings.currentMeeting);

// //     const [meetingName, setMeetingName] = useState("");
// //     const [selectedDuration, setSelectedDuration] = useState("15");
// //     const [meetingLocation, setMeetingLocation] = useState("googlemeet");

// //     useEffect(() => {
// //         if (currentMeeting) {
// //             setMeetingName(currentMeeting.name || "");
// //             setSelectedDuration(currentMeeting.duration || "15");
// //             setMeetingLocation(currentMeeting.location || "googlemeet");
// //         }
// //     }, [currentMeeting]);

// //     const handleDurationChange = (event) => {
// //         const duration = event.target.value;
// //         setSelectedDuration(duration);
// //     };

// //     const handleContinue = async () => {
// //         try {
// //             const queryParams = new URLSearchParams(location.search);
// //             const meetingId = queryParams.get("id");
// //             const userToken = sessionStorage.getItem("userToken");

// //             if (!userToken) {
// //                 throw new Error("Token not found");
// //             }

// //             const meetingData = {
// //                 userId: meetingId,
// //                 scheduleId: null,
// //                 name: meetingName,
// //                 duration: selectedDuration,
// //                 location: "google_meet",
// //                 link: null,
// //             };

// //             const response = await fetch(
// //                 `http://localhost:8000/meetingSettings/${meetingId}`,
// //                 {
// //                     method: "PATCH",
// //                     headers: {
// //                         "Content-Type": "application/json",
// //                         Authorization: userToken,
// //                     },
// //                     body: JSON.stringify(meetingData),
// //                 }
// //             );

// //             if (response.status === 200) {
// //                 // Meeting updated successfully
// //                 // Optionally, you can redirect the user to another page
// //                 navigate(
// //                     `/meetingsetting?id=${meetingId}&name=${encodeURIComponent(
// //                         meetingName
// //                     )}&duration=${selectedDuration}&location=${meetingLocation}`
// //                 );
// //             } else {
// //                 // Handle other status codes if needed
// //                 console.error("Failed to update meeting:", response.data.error);
// //             }
// //         } catch (error) {
// //             console.error("Error updating meeting:", error);
// //         }
// //     };

// //     const handleCancel = () => {
// //         const queryParams = new URLSearchParams(location.search);
// //         const meetingId = queryParams.get("id");

// //         navigate(`/meetingsetting?id=${meetingId}`);
// //     };

// //     return (
// //         <>
// //             <div className="sidebar-block">
// //                 <nav id="sidebar" className="sidebar-wrapper toggled">
// //                     <div
// //                         className="sidebar-content"
// //                         data-simplebar=""
// //                         style={{ height: "calc(100% - 60px)" }}
// //                     >
// //                         <div className="create-meeting mt-3 p-3">
// //                             <button className="meeting-cancel" onClick={handleCancel}>
// //                                 <span className="mdi mdi-arrow-left-thick"></span>Cancel
// //                             </button>
// //                             <h4 className="mt-3">Edit Meeting</h4>
// //                         </div>
// //                         <hr />
// //                         <div className="d-flex flex-column meeting-detail p-4">
// //                             <label>Meeting name</label>
// //                             <input
// //                                 type="text"
// //                                 className="form-control mb-3"
// //                                 placeholder="Name your meeting"
// //                                 value={meetingName}
// //                                 onChange={(e) => setMeetingName(e.target.value)}
// //                             />

// //                             <label>Duration</label>
// //                             <select
// //                                 id="duration"
// //                                 className="custom-select"
// //                                 value={selectedDuration}
// //                                 onChange={handleDurationChange}
// //                             >
// //                                 <option value="15">15 min</option>
// //                                 <option value="30">30 min</option>
// //                                 <option value="45">45 min</option>
// //                                 <option value="60">60 min</option>
// //                                 <option value="Custom">Custom</option>
// //                             </select>
// //                             <br />

// //                             <label>Location</label>
// //                             <select
// //                                 id="location"
// //                                 className="custom-select"
// //                                 value={meetingLocation}
// //                                 onChange={(e) => setMeetingLocation(e.target.value)}
// //                             >
// //                                 <option value="googlemeet">Google Meet</option>
// //                             </select>
// //                         </div>
// //                     </div>
// //                     <div className="meeting-controller d-flex justify-content-end me-4">
// //                         <button className="meeting-cancel" onClick={handleCancel}>
// //                             <Link to="/meetingsetting" className="meeting-cancel">
// //                                 Cancel
// //                             </Link>
// //                         </button>
// //                         <button className="btn btn-primary" onClick={handleContinue}>
// //                             Save and close
// //                         </button>
// //                     </div>
// //                 </nav>
// //             </div>
// //         </>
// //     );
// // };

// // export default EditMeetingsidebar;

// // import React, { useState, useEffect } from "react";
// // import { useSelector, useDispatch } from 'react-redux';
// // import { useLocation, useNavigate, Link } from "react-router-dom";
// // import { setMeetingDetails } from './actions/meetingActions'; // Import action to set meeting details

// // const EditMeetingsidebar = () => {
// //     const dispatch = useDispatch();
// //     const navigate = useNavigate();
// //     const location = useLocation();

// //     // Retrieve meeting ID from Redux store
// //     const meetingId = useSelector(state => state.meetings.meetingId);


// //     const currentMeeting = useSelector(state => state.meetings.currentMeeting);

// //     const [meetingName, setMeetingName] = useState("");
// //     const [selectedDuration, setSelectedDuration] = useState("15");
// //     const [meetingLocation, setMeetingLocation] = useState("googlemeet");

// //     useEffect(() => {
// //         if (currentMeeting) {
// //             setMeetingName(currentMeeting.name || "");
// //             setSelectedDuration(currentMeeting.duration || "15");
// //             setMeetingLocation(currentMeeting.location || "googlemeet");
// //         }
// //     }, [currentMeeting]);

// //     const handleDurationChange = (event) => {
// //         const duration = event.target.value;
// //         setSelectedDuration(duration);
// //     };

// //     const handleContinue = async () => {
// //         try {
// //             const queryParams = new URLSearchParams(location.search);
// //             // Use meetingId from Redux store
// //             const userToken = sessionStorage.getItem("userToken");

// //             if (!userToken) {
// //                 throw new Error("Token not found");
// //             }

// //             const meetingData = {
// //                 userId: meetingId,
// //                 scheduleId: null,
// //                 name: meetingName,
// //                 duration: selectedDuration,
// //                 location: "google_meet",
// //                 link: null,
// //             };

// //             const response = await fetch(
// //                 `http://localhost:8000/meetingSettings/${meetingId}`,
// //                 {
// //                     method: "PATCH",
// //                     headers: {
// //                         "Content-Type": "application/json",
// //                         Authorization: userToken,
// //                     },
// //                     body: JSON.stringify(meetingData),
// //                 }
// //             );

// //             if (response.status === 200) {
// //                 // Meeting updated successfully
// //                 const data = await response.json();
// //                 // Dispatch action to update meeting details in Redux store
// //                 dispatch(setMeetingDetails(data));

// //                 // Optionally, you can redirect the user to another page
// //                 navigate(
// //                     `/meetingsetting?id=${meetingId}&name=${encodeURIComponent(
// //                         meetingName
// //                     )}&duration=${selectedDuration}&location=${meetingLocation}`
// //                 );
// //             } else {
// //                 // Handle other status codes if needed
// //                 console.error("Failed to update meeting:", response.data.error);
// //             }
// //         } catch (error) {
// //             console.error("Error updating meeting:", error);
// //         }
// //     };

// //     const handleCancel = () => {
// //         const queryParams = new URLSearchParams(location.search);
// //         const meetingId = queryParams.get("id");

// //         navigate(`/meetingsetting?id=${meetingId}`);
// //     };

// //     return (
// //         <>
// //             <div className="sidebar-block">
// //                 <nav id="sidebar" className="sidebar-wrapper toggled">
// //                     <div
// //                         className="sidebar-content"
// //                         data-simplebar=""
// //                         style={{ height: "calc(100% - 60px)" }}
// //                     >
// //                         <div className="create-meeting mt-3 p-3">
// //                             <button className="meeting-cancel" onClick={handleCancel}>
// //                                 <span className="mdi mdi-arrow-left-thick"></span>Cancel
// //                             </button>
// //                             <h4 className="mt-3">Edit Meeting</h4>
// //                         </div>
// //                         <hr />
// //                         <div className="d-flex flex-column meeting-detail p-4">
// //                             <label>Meeting name</label>
// //                             <input
// //                                 type="text"
// //                                 className="form-control mb-3"
// //                                 placeholder="Name your meeting"
// //                                 value={meetingName}
// //                                 onChange={(e) => setMeetingName(e.target.value)}
// //                             />

// //                             <label>Duration</label>
// //                             <select
// //                                 id="duration"
// //                                 className="custom-select"
// //                                 value={selectedDuration}
// //                                 onChange={handleDurationChange}
// //                             >
// //                                 <option value="15">15 min</option>
// //                                 <option value="30">30 min</option>
// //                                 <option value="45">45 min</option>
// //                                 <option value="60">60 min</option>
// //                                 <option value="Custom">Custom</option>
// //                             </select>
// //                             <br />

// //                             <label>Location</label>
// //                             <select
// //                                 id="location"
// //                                 className="custom-select"
// //                                 value={meetingLocation}
// //                                 onChange={(e) => setMeetingLocation(e.target.value)}
// //                             >
// //                                 <option value="googlemeet">Google Meet</option>
// //                             </select>
// //                         </div>
// //                     </div>
// //                     <div className="meeting-controller d-flex justify-content-end me-4">
// //                         <button className="meeting-cancel" onClick={handleCancel}>
// //                             <Link to="/meetingsetting" className="meeting-cancel">
// //                                 Cancel
// //                             </Link>
// //                         </button>
// //                         <button className="btn btn-primary" onClick={handleContinue}>
// //                             Save and close
// //                         </button>
// //                     </div>
// //                 </nav>
// //             </div>
// //         </>
// //     );
// // };

// // export default EditMeetingsidebar;

// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { useLocation, useNavigate, Link } from "react-router-dom";
// import { setMeetingDetails } from './actions/meetingActions'; // Import action to set meeting details

// const EditMeetingsidebar = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const location = useLocation();

//     // Retrieve meeting ID from Redux store
//     const meetingId = useSelector(state => state.meetings.meetingId);

//     const currentMeeting = useSelector(state => state.meetings.currentMeeting);

//     const [meetingName, setMeetingName] = useState("");
//     const [selectedDuration, setSelectedDuration] = useState("15");
//     const [meetingLocation, setMeetingLocation] = useState("googlemeet");

//     useEffect(() => {
//         if (currentMeeting) {
//             setMeetingName(currentMeeting.name || "");
//             setSelectedDuration(currentMeeting.duration || "15");
//             setMeetingLocation(currentMeeting.location || "googlemeet");
//         }
//     }, [currentMeeting]);

//     const handleDurationChange = (event) => {
//         const duration = event.target.value;
//         setSelectedDuration(duration);
//     };

//     const handleContinue = async () => {
//         try {
//             const queryParams = new URLSearchParams(location.search);
//             // Use meetingId from Redux store
//             const userToken = sessionStorage.getItem("userToken");

//             if (!userToken) {
//                 throw new Error("Token not found");
//             }

//             const meetingData = {
//                 userId: meetingId,
//                 scheduleId: null,
//                 name: meetingName,
//                 duration: selectedDuration,
//                 location: "google_meet",
//                 link: null,
//             };
//             console.log(meetingId)
//             const response = await fetch(
//                 `http://localhost:8000/meetingSettings/${meetingId}`,
//                 {
//                     method: "PATCH",
//                     headers: {
//                         "Content-Type": "application/json",
//                         Authorization: userToken,
//                     },
//                     body: JSON.stringify(meetingData),
//                 }
//             );

//             if (response.status === 200) {
//                 // Meeting updated successfully
//                 const data = await response.json();
//                 // Dispatch action to update meeting details in Redux store
//                 dispatch(setMeetingDetails(data));

//                 // Optionally, you can redirect the user to another page
//                 navigate(
//                     `/meetingsetting?id=${meetingId}&name=${encodeURIComponent(
//                         meetingName
//                     )}&duration=${selectedDuration}&location=${meetingLocation}`
//                 );
//             } else {
//                 // Handle other status codes if needed
//                 console.error("Failed to update meeting:", response.data.error);
//             }
//         } catch (error) {
//             console.error("Error updating meeting:", error);
//         }
//     };

//     const handleCancel = () => {
//         const queryParams = new URLSearchParams(location.search);
//         const meetingId = queryParams.get("id");

//         navigate(`/meetingsetting?id=${meetingId}`);
//     };

//     return (
//         <>
//             <div className="sidebar-block">
//                 <nav id="sidebar" className="sidebar-wrapper toggled">
//                     <div
//                         className="sidebar-content"
//                         data-simplebar=""
//                         style={{ height: "calc(100% - 60px)" }}
//                     >
//                         <div className="create-meeting mt-3 p-3">
//                             <button className="meeting-cancel" onClick={handleCancel}>
//                                 <span className="mdi mdi-arrow-left-thick"></span>Cancel
//                             </button>
//                             <h4 className="mt-3">Edit Meeting</h4>
//                         </div>
//                         <hr />
//                         <div className="d-flex flex-column meeting-detail p-4">
//                             <label>Meeting name</label>
//                             <input
//                                 type="text"
//                                 className="form-control mb-3"
//                                 placeholder="Name your meeting"
//                                 value={meetingName}
//                                 onChange={(e) => setMeetingName(e.target.value)}
//                             />

//                             <label>Duration</label>
//                             <select
//                                 id="duration"
//                                 className="custom-select"
//                                 value={selectedDuration}
//                                 onChange={handleDurationChange}
//                             >
//                                 <option value="15">15 min</option>
//                                 <option value="30">30 min</option>
//                                 <option value="45">45 min</option>
//                                 <option value="60">60 min</option>
//                                 <option value="Custom">Custom</option>
//                             </select>
//                             <br />

//                             <label>Location</label>
//                             <select
//                                 id="location"
//                                 className="custom-select"
//                                 value={meetingLocation}
//                                 onChange={(e) => setMeetingLocation(e.target.value)}
//                             >
//                                 <option value="googlemeet">Google Meet</option>
//                             </select>
//                         </div>
//                     </div>
//                     <div className="meeting-controller d-flex justify-content-end me-4">
//                         <button className="meeting-cancel" onClick={handleCancel}>
//                             <Link to="/meetingsetting" className="meeting-cancel">
//                                 Cancel
//                             </Link>
//                         </button>
//                         <button className="btn btn-primary" onClick={handleContinue}>
//                             Save and close
//                         </button>
//                     </div>
//                 </nav>
//             </div>
//         </>
//     );
// };

// export default EditMeetingsidebar;

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate, Link } from "react-router-dom";
import { setMeetingDetails } from './actions/meetingActions'; // Import action to set meeting details

const EditMeetingsidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    // Get the current meeting from the Redux store
    const currentMeeting = useSelector(state => state.meetings.currentMeeting);

    // Extract the meeting ID from the current meeting object
    const meetingId = currentMeeting ? currentMeeting.id : null;

    const [meetingName, setMeetingName] = useState("");
    const [selectedDuration, setSelectedDuration] = useState("15");
    const [meetingLocation, setMeetingLocation] = useState("googlemeet");

    useEffect(() => {
        if (currentMeeting) {
            setMeetingName(currentMeeting.name || "");
            setSelectedDuration(currentMeeting.duration || "15");
            setMeetingLocation(currentMeeting.location || "googlemeet");
        }
    }, [currentMeeting]);

    const handleDurationChange = (event) => {
        const duration = event.target.value;
        setSelectedDuration(duration);
    };

    const handleContinue = async () => {
        try {
            // Use meetingId from Redux store
            const userToken = sessionStorage.getItem("userToken");

            if (!userToken) {
                throw new Error("Token not found");
            }

            const meetingData = {
                userId: meetingId,
                scheduleId: null,
                name: meetingName,
                duration: selectedDuration,
                location: "google_meet",
                link: null,
            };

            const response = await fetch(
                `http://localhost:8000/meetingSettings/${meetingId}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: userToken,
                    },
                    body: JSON.stringify(meetingData),
                }
            );

            if (response.status === 200) {
                // Meeting updated successfully
                const data = await response.json();
                // Dispatch action to update meeting details in Redux store
                dispatch(setMeetingDetails(data));

                // Optionally, you can redirect the user to another page without including data in the URL
                navigate(`/meetingsetting`);
            } else {
                // Handle other status codes if needed
                console.error("Failed to update meeting:", response.data.error);
            }
        } catch (error) {
            console.error("Error updating meeting:", error);
        }
    };


    const handleCancel = () => {
        const queryParams = new URLSearchParams(location.search);
        const meetingId = queryParams.get("id");

        navigate(`/meetingsetting?id=${meetingId}`);
    };

    return (
        <>
            <div className="sidebar-block">
                <nav id="sidebar" className="sidebar-wrapper toggled">
                    <div
                        className="sidebar-content"
                        data-simplebar=""
                        style={{ height: "calc(100% - 60px)" }}
                    >
                        <div className="create-meeting mt-3 p-3">
                            <button className="meeting-cancel" onClick={handleCancel}>
                                <span className="mdi mdi-arrow-left-thick"></span>Cancel
                            </button>
                            <h4 className="mt-3">Edit Meeting</h4>
                        </div>
                        <hr />
                        <div className="d-flex flex-column meeting-detail p-4">
                            <label>Meeting name</label>
                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Name your meeting"
                                value={meetingName}
                                onChange={(e) => setMeetingName(e.target.value)}
                            />

                            <label>Duration</label>
                            <select
                                id="duration"
                                className="custom-select"
                                value={selectedDuration}
                                onChange={handleDurationChange}
                            >
                                <option value="15">15 min</option>
                                <option value="30">30 min</option>
                                <option value="45">45 min</option>
                                <option value="60">60 min</option>
                                <option value="Custom">Custom</option>
                            </select>
                            <br />

                            <label>Location</label>
                            <select
                                id="location"
                                className="custom-select"
                                value={meetingLocation}
                                onChange={(e) => setMeetingLocation(e.target.value)}
                            >
                                <option value="googlemeet">Google Meet</option>
                            </select>
                        </div>
                    </div>
                    <div className="meeting-controller d-flex justify-content-end me-4">
                        <button className="meeting-cancel" onClick={handleCancel}>
                            <Link to="/meetingsetting" className="meeting-cancel">
                                Cancel
                            </Link>
                        </button>
                        <button className="btn btn-primary" onClick={handleContinue}>
                            Save and close
                        </button>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default EditMeetingsidebar;
