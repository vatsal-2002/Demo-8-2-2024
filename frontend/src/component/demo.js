// import React, { useState } from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';


// const Demo = () => {
//   const [isToggled, setToggled] = useState(true);

//   const handleToggle = () => {
//     setToggled(!isToggled);
//   };

//   return (
//     <>
//       <div className={`page-wrapper ${isToggled ? 'toggled' : ''}`}>
//         <nav id="sidebar" className="sidebar-wrapper">
//           <div
//             className="sidebar-content"
//             data-simplebar=""
//             style={{ height: "calc(100% - 60px)" }}
//           >
//             <div className="sidebar-brand">
//               <img
//                 src="assets/images/Logo.png"
//                 height={100}
//                 className="logo-light-mode"
//                 alt=""
//               />
//             </div>
//             <ul className="sidebar-menu">
//               <div>
//                 <button className="create_meeting_btn">
//                   <span className="mdi mdi-plus" />
//                   Create
//                 </button>
//               </div>
//               <li className="sidebar">
//                 <a href="">
//                   <i className="mdi mdi-link-variant" />
//                   Event types
//                 </a>
//               </li>
//               <li className="sidebar">
//                 <a href="">
//                   <i className="mdi mdi-calendar-range" />
//                   Scheduled events
//                 </a>
//               </li>
//               <li className="sidebar">
//                 <a href="">
//                   <i className="mdi mdi-clock-time-five-outline" />
//                   Availability
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </nav>
//         <main className="page-content bg-light">
//           <div className="top-header">
//             <div className="header-bar d-flex justify-content-between">
//               <div className="d-flex align-items-center">
//                 <a href="#" className="logo-icon me-3">
//                   <img
//                     src="assets/images/logo-icon.png"
//                     height={30}
//                     className="small"
//                     alt=""
//                   />
//                   <span className="big">
//                     <img
//                       src="assets/images/logo-dark.png"
//                       height={24}
//                       className="logo-light-mode"
//                       alt=""
//                     />
//                     <img
//                       src="assets/images/logo-light.png"
//                       height={24}
//                       className="logo-dark-mode"
//                       alt=""
//                     />
//                   </span>
//                 </a>

//                 <button className="toggle-button btn btn-icon btn-soft-light" onClick={handleToggle}>
//                   <i className="ti ti-menu-2" />
//                 </button>
//               </div>

//               <div className='page-profile'>
//                 <Dropdown>
//                   <Dropdown.Toggle variant="primary" id="dropdown-basic">
//                     <span class="mdi mdi-account"></span>
//                   </Dropdown.Toggle>

//                   <Dropdown.Menu>
//                     <Dropdown.Item href="#/action-1">Logout</Dropdown.Item>
//                   </Dropdown.Menu>
//                 </Dropdown>
//               </div>

//             </div>
//           </div>
//           <div className="container-fluid">
//             <div className="layout-specing">
//               <div className="d-md-flex justify-content-between align-items-center">
//                 <h5 className="mb-0">Event types</h5>
//               </div>
//               <div className="row">
//                 <div className="row row-cols-xl-3 row-cols-md-2 row-cols-1">
//                   <div className="col mt-4">
//                     <div className="features feature-primary d-flex justify-content-between rounded shadow p-3">
//                       <div className="d-flex align-items-center">
//                         <div className="flex-1 ms-3">
//                           <h3 className="mb-0 text-muted">Interview</h3>
//                           <h6 className="mb-0 text-muted">
//                             30 mins, One-on-One
//                           </h6>
//                           <h6 className="mb-0 text-muted">
//                             View booking page
//                           </h6>
//                         </div>
//                       </div>

//                       <Dropdown>
//                         <Dropdown.Toggle variant="" id="dropdown-basic">
//                           <span className="mdi mdi-cog" />
//                         </Dropdown.Toggle>

//                         <Dropdown.Menu>
//                           <Dropdown.Item href="#/action-1">
//                             <span className="mdi mdi-pencil" />
//                             Edit
//                           </Dropdown.Item>
//                           <Dropdown.Item href="#/action-2">
//                             <span className="mdi mdi-delete" />
//                             Delete
//                           </Dropdown.Item>
//                         </Dropdown.Menu>
//                       </Dropdown>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </>
//   );

// }

// export default Demo

const Demo = () => {

  const decodeToken = (token) => {
    try {
      const [header, payload, signature] = token.split('.');
      const decodedPayload = JSON.parse(atob(payload)); // Decoding Base64 URL encoded payload
  
      return decodedPayload;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  };
  
  // Usage
  const token = sessionStorage.getItem('userToken');
  const decodedToken = decodeToken(token);
  console.log(decodedToken);

  return (
    <>
    </>
  )
}

export default Demo