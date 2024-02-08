// import React, { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";

// const Meetingsettingsidebar = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [meetingName, setMeetingName] = useState("");
//   const [meetingDuration, setMettingDuration] = useState("");

//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const name = params.get("name");
//     const duration = params.get("duration");
//     setMeetingName(name || "");
//     setMettingDuration(duration || "");
//   }, [location.search]);

//   const handleMeetingDetailsClick = async () => {
//     try {
//       const params = new URLSearchParams(location.search);
//       const meetingId = params.get("id");
//       const userToken = sessionStorage.getItem("userToken");

//       const response = await fetch(
//         `http://localhost:8000/meetingSettings/${meetingId}`,
//         {
//           method: "GET",
//           headers: {
//             Authorization: `${userToken}`,
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to fetch meeting details");
//       }

//       const meetingDetails = await response.json();

//       const queryParams = new URLSearchParams({
//         id: meetingDetails.id,
//         name: meetingDetails.name,
//         duration: meetingDetails.duration,
//         location: meetingDetails.location,
//       });

//       if (meetingDetails.location === "Scheduling settings") {
//         navigate(`/schedulesetting`);
//       } else {
//         navigate(`/editmeeting?${queryParams.toString()}`);
//       }
//     } catch (error) {
//       console.error("Error fetching meeting details:", error.message);
//     }
//   };

//   return (
//     <>
//       <div className="sidebar-block">
//         <nav id="sidebar" className="sidebar-wrapper toggled">
//           <div
//             className="sidebar-content"
//             data-simplebar=""
//             style={{ height: "calc(100% - 60px)" }}
//           >
//             <div className="create-meeting mt-3 p-3">
//               <Link to={`/index`}>
//                 <button className="meeting-cancel">
//                   <span className="mdi mdi-arrow-left-thick"></span>Cancel
//                 </button>
//               </Link>
//               <h4 className="mt-3">{meetingName}</h4>
//             </div>
//             <hr />
//             <div className="d-flex flex-column meeting-detail p-4">
//               <Link
//                 className="meetingsetting-meetingdetail"
//                 onClick={handleMeetingDetailsClick}
//               >
//                 <h5>
//                   <span className="mdi mdi-view-headline"></span> Meeting
//                   Details
//                 </h5>
//                 <h6 className="mx-4">{meetingDuration} min</h6>
//               </Link>
//               <hr />
//               <Link
//                 to="/schedulesetting"
//                 className="meetingsetting-SchedulingSettings"
//               >
//                 <h5>
//                   <span className="mdi mdi-calendar-text"></span> Scheduling
//                   settings
//                 </h5>
//                 <h6 className="mx-4">30 rolling calendar days</h6>
//                 <h6 className="mx-4">Weekdays, hours vary</h6>
//               </Link>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// };

// import React, { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useSelector } from 'react-redux';

// const Meetingsettingsidebar = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [meetingDetails, setMeetingDetails] = useState(null);

//   const currentMeeting = useSelector(state => state.meetings.currentMeeting);

//   useEffect(() => {
//     const fetchMeetingDetails = async () => {
//       try {
//         if (!currentMeeting) {
//           console.error("No current meeting data available.");
//           return;
//         }
//         const userToken = sessionStorage.getItem("userToken");

//         const response = await fetch(
//           `http://localhost:8000/meetingSettings/${currentMeeting.id}`,
//           {
//             method: "GET",
//             headers: {
//               Authorization: `${userToken}`,
//             },
//           }
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch meeting details");
//         }

//         const meetingDetailsData = await response.json();
//         setMeetingDetails(meetingDetailsData);
//       } catch (error) {
//         console.error("Error fetching meeting details:", error.message);
//       }
//     };

//     fetchMeetingDetails();
//   }, [currentMeeting]);

//   const handleMeetingDetailsClick = () => {
//     if (meetingDetails) {
//       const queryParams = new URLSearchParams({
//         id: meetingDetails.id,
//         name: meetingDetails.name,
//         duration: meetingDetails.duration,
//         location: meetingDetails.location,
//       });

//       if (meetingDetails.location === "Scheduling settings") {
//         navigate(`/schedulesetting`);
//       } else {
//         navigate(`/editmeeting?${queryParams.toString()}`);
//       }
//     }
//   };


//   return (
//     <div className="sidebar-block">
//       <nav id="sidebar" className="sidebar-wrapper toggled">
//         <div
//           className="sidebar-content"
//           data-simplebar=""
//           style={{ height: "calc(100% - 60px)" }}
//         >
//           <div className="create-meeting mt-3 p-3">
//             <Link to={`/index`}>
//               <button className="meeting-cancel">
//                 <span className="mdi mdi-arrow-left-thick"></span>Cancel
//               </button>
//             </Link>
//             <h4 className="mt-3">{meetingDetails ? meetingDetails.name : ""}</h4>
//           </div>
//           <hr />
//           <div className="d-flex flex-column meeting-detail p-4">
//             <Link
//               className="meetingsetting-meetingdetail"
//               onClick={handleMeetingDetailsClick}
//             >
//               <h5>
//                 <span className="mdi mdi-view-headline"></span> Meeting
//                 Details
//               </h5>
//               <h6 className="mx-4">{meetingDetails ? meetingDetails.duration + " min" : ""}</h6>
//             </Link>
//             <hr />
//             <Link
//               to="/schedulesetting"
//               className="meetingsetting-SchedulingSettings"
//             >
//               <h5>
//                 <span className="mdi mdi-calendar-text"></span> Scheduling
//                 settings
//               </h5>
//               <h6 className="mx-4">30 rolling calendar days</h6>
//               <h6 className="mx-4">Weekdays, hours vary</h6>
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Meetingsettingsidebar;

// import React, { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useSelector } from 'react-redux';

// const Meetingsettingsidebar = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [meetingDetails, setMeetingDetails] = useState(null);

//   const currentMeeting = useSelector(state => state.meetings.currentMeeting);

//   useEffect(() => {
//     const fetchMeetingDetails = async () => {
//       try {
//         if (!currentMeeting) {
//           console.error("No current meeting data available.");
//           return;
//         }
//         const userToken = sessionStorage.getItem("userToken");

//         const response = await fetch(
//           `http://localhost:8000/meetingSettings/${currentMeeting.id}`,
//           {
//             method: "GET",
//             headers: {
//               Authorization: `${userToken}`,
//             },
//           }
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch meeting details");
//         }

//         const meetingDetailsData = await response.json();
//         setMeetingDetails(meetingDetailsData);
//       } catch (error) {
//         console.error("Error fetching meeting details:", error.message);
//       }
//     };

//     fetchMeetingDetails();
//   }, [currentMeeting]);

//   const handleMeetingDetailsClick = () => {
//     if (meetingDetails) {
//       const queryParams = new URLSearchParams({
//         id: meetingDetails.id,
//         name: meetingDetails.name,
//         duration: meetingDetails.duration,
//         location: meetingDetails.location,
//       });

//       if (meetingDetails.location === "Scheduling settings") {
//         navigate(`/schedulesetting`);
//       } else {
//         // Navigate to EditMeetingsidebar with meeting details as query parameters
//         navigate(`/editmeeting?${queryParams.toString()}`);
//       }
//     }
//   };


//   return (
//     <div className="sidebar-block">
//       <nav id="sidebar" className="sidebar-wrapper toggled">
//         <div
//           className="sidebar-content"
//           data-simplebar=""
//           style={{ height: "calc(100% - 60px)" }}
//         >
//           <div className="create-meeting mt-3 p-3">
//             <Link to={`/index`}>
//               <button className="meeting-cancel">
//                 <span className="mdi mdi-arrow-left-thick"></span>Cancel
//               </button>
//             </Link>
//             <h4 className="mt-3">{meetingDetails ? meetingDetails.name : ""}</h4>
//           </div>
//           <hr />
//           <div className="d-flex flex-column meeting-detail p-4">
//             <div
//               className="meetingsetting-meetingdetail  meetingsettingondetail"
//               onClick={handleMeetingDetailsClick}
//             >
//               <h5>
//                 <span className="mdi mdi-view-headline"></span> Meeting
//                 Details
//               </h5>
//               <h6 className="mx-4">{meetingDetails ? meetingDetails.duration + " min" : ""}</h6>
//             </div>
//             <hr />
//             <Link
//               to="/schedulesetting"
//               className="meetingsetting-SchedulingSettings"
//             >
//               <h5>
//                 <span className="mdi mdi-calendar-text"></span> Scheduling
//                 settings
//               </h5>
//               <h6 className="mx-4">30 rolling calendar days</h6>
//               <h6 className="mx-4">Weekdays, hours vary</h6>
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Meetingsettingsidebar;



// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate, Link } from "react-router-dom";
// import { setCurrentMeeting } from './actions/meetingActions';

// const Meetingsettingsidebar = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [meetingDetails, setMeetingDetails] = useState(null);

//   // Get the current meeting from the Redux store
//   const currentMeeting = useSelector(state => state.meetings.currentMeeting);

//   // Extract the meetingId from the current meeting object
//   const meetingId = currentMeeting ? currentMeeting.id : null;

//   useEffect(() => {
//     const fetchMeetingDetails = async () => {
//       try {
//         if (!currentMeeting) {
//           console.error("No current meeting data available.");
//           return;
//         }
//         const userToken = sessionStorage.getItem("userToken");

//         const response = await fetch(
//           `http://localhost:8000/meetingSettings/${meetingId}`, // Use the meetingId
//           {
//             method: "GET",
//             headers: {
//               Authorization: `${userToken}`,
//             },
//           }
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch meeting details");
//         }

//         const meetingDetailsData = await response.json();
//         setMeetingDetails(meetingDetailsData);
//       } catch (error) {
//         console.error("Error fetching meeting details:", error.message);
//       }
//     };

//     fetchMeetingDetails();
//   }, [currentMeeting, meetingId]); // Include meetingId in the dependency array

//   const handleMeetingDetailsClick = () => {
//     if (meetingDetails) {
//       dispatch(setCurrentMeeting(meetingDetails)); // Dispatch action to set current meeting details in Redux store

//       if (meetingDetails.location === "Scheduling settings") {
//         navigate(`/schedulesetting`);
//       } else {
//         navigate(`/editmeeting`);
//       }
//     }
//   };


//   return (
//     <div className="sidebar-block">
//       <nav id="sidebar" className="sidebar-wrapper toggled">
//         <div
//           className="sidebar-content"
//           data-simplebar=""
//           style={{ height: "calc(100% - 60px)" }}
//         >
//           <div className="create-meeting mt-3 p-3">
//             <Link to={`/index`}>
//               <button className="meeting-cancel">
//                 <span className="mdi mdi-arrow-left-thick"></span>Cancel
//               </button>
//             </Link>
//             <h4 className="mt-3">{meetingDetails ? meetingDetails.name : ""}</h4>
//           </div>
//           <hr />
//           <div className="d-flex flex-column meeting-detail p-4">
//             <div
//               className="meetingsetting-meetingdetail  meetingsettingondetail"
//               onClick={handleMeetingDetailsClick}
//             >
//               <h5>
//                 <span className="mdi mdi-view-headline"></span> Meeting
//                 Details
//               </h5>
//               <h6 className="mx-4">{meetingDetails ? meetingDetails.duration + " min" : ""}</h6>
//             </div>
//             <hr />
//             <Link
//               to="/schedulesetting"
//               className="meetingsetting-SchedulingSettings"
//             >
//               <h5>
//                 <span className="mdi mdi-calendar-text"></span> Scheduling
//                 settings
//               </h5>
//               <h6 className="mx-4">30 rolling calendar days</h6>
//               <h6 className="mx-4">Weekdays, hours vary</h6>
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Meetingsettingsidebar;



import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from "react-router-dom";
import { setCurrentMeeting } from './actions/meetingActions';

const Meetingsettingsidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [meetingDetails, setMeetingDetails] = useState(null);

  // Get the current meeting from the Redux store
  const currentMeeting = useSelector(state => state.meetings.currentMeeting);

  // Extract the meetingId from the current meeting object
  const meetingId = currentMeeting ? currentMeeting.id : null;

  useEffect(() => {
    const fetchMeetingDetails = async () => {
      try {
        if (!currentMeeting) {
          console.error("No current meeting data available.");
          return;
        }
        const userToken = sessionStorage.getItem("userToken");

        const response = await fetch(
          `http://localhost:8000/meetingSettings/${meetingId}`, // Use the meetingId
          {
            method: "GET",
            headers: {
              Authorization: `${userToken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch meeting details");
        }

        const meetingDetailsData = await response.json();
        setMeetingDetails(meetingDetailsData);
      } catch (error) {
        console.error("Error fetching meeting details:", error.message);
      }
    };

    fetchMeetingDetails();
  }, [currentMeeting, meetingId]); // Include meetingId in the dependency array

  const handleMeetingDetailsClick = () => {
    if (meetingDetails) {
      dispatch(setCurrentMeeting(meetingDetails)); // Dispatch action to set current meeting details in Redux store

      if (meetingDetails.location === "Scheduling settings") {
        navigate(`/schedulesetting`);
      } else {
        navigate(`/editmeeting`);
      }
    }
  };


  return (
    <div className="sidebar-block">
      <nav id="sidebar" className="sidebar-wrapper toggled">
        <div
          className="sidebar-content"
          data-simplebar=""
          style={{ height: "calc(100% - 60px)" }}
        >
          <div className="create-meeting mt-3 p-3">
            <Link to={`/index`}>
              <button className="meeting-cancel">
                <span className="mdi mdi-arrow-left-thick"></span>Cancel
              </button>
            </Link>
            <h4 className="mt-3">{meetingDetails ? meetingDetails.name : ""}</h4>
          </div>
          <hr />
          <div className="d-flex flex-column meeting-detail p-4">
            <div
              className="meetingsetting-meetingdetail  meetingsettingondetail"
              onClick={handleMeetingDetailsClick}
            >
              <h5>
                <span className="mdi mdi-view-headline"></span> Meeting
                Details
              </h5>
              <h6 className="mx-4">{meetingDetails ? meetingDetails.duration + " min" : ""}</h6>
            </div>
            <hr />
            <Link
              to="/schedulesetting"
              className="meetingsetting-SchedulingSettings"
            >
              <h5>
                <span className="mdi mdi-calendar-text"></span> Scheduling
                settings
              </h5>
              <h6 className="mx-4">30 rolling calendar days</h6>
              <h6 className="mx-4">Weekdays, hours vary</h6>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Meetingsettingsidebar;
