// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import Login from './component/login';
// import Signup from './component/signup';
// import Setting from './component/setting';
// import Availability from './component/availability';
// import Demo from './component/demo';
// import Index from './component/index';
// import Createmeeting from './component/createmeeting';
// import Meetingsetting from './component/meetingsetting';
// import Schedulesetting from './component/schedulesetting';
// import EditMeeting from './component/editmeeting';


// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/setting" element={<Setting />} />
//           <Route path="/availability" element={<Availability />} />
//           <Route path="/index" element={<Index />} />
//           <Route path="/createmeeting" element={<Createmeeting />} />
//           <Route path="/meetingsetting" element={<Meetingsetting />} />
//           <Route path='/Editmeeting' element={<EditMeeting />} />
//           <Route path="/schedulesetting" element={<Schedulesetting />} />
//           <Route path="/demo" element={<Demo />} />

//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux'; // Importing Provider to wrap the application
import store from './component/store'; // Importing the Redux store
import Login from './component/login';
import Signup from './component/signup';
import Setting from './component/setting';
import Availability from './component/availability';
import Demo from './component/demo';
import Index from './component/index';
import Createmeeting from './component/createmeeting';
import Meetingsetting from './component/meetingsetting';
import Schedulesetting from './component/schedulesetting';
import EditMeeting from './component/editmeeting';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/availability" element={<Availability />} />
            <Route path="/index" element={<Index />} />
            <Route path="/createmeeting" element={<Createmeeting />} />
            <Route path="/meetingsetting" element={<Meetingsetting />} />
            <Route path="/editmeeting" element={<EditMeeting />} />
            <Route path="/schedulesetting" element={<Schedulesetting />} />
            <Route path="/demo" element={<Demo />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
