import Schedulesettingsidebar from './schedulesettingsidebar';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Schedulesetting = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };


  return (
    <>
      <div className="container-fuild">
        <row className="d-flex">
          <div className="col-3">
            <div className="page-wrapper toggled">
              <Schedulesettingsidebar />
            </div>
          </div>

          <div className="col-9 d-flex align-items-center bg-soft-secondary">
            <div className="container create-preview">
              <div className="row d-flex">
                <p>
                  This is a preview. To book an event, share the link with
                  your invitees.
                  <label>
                    View live page
                  </label>
                </p>

                <div className="col-6 d-flex flex-column p-4">
                  <label>VATSAL PRAJAPATI</label>
                  <h3>Event name here</h3>
                  <label>
                    <span className="mdi mdi-clock-time-five-outline"></span>
                    30 min
                  </label>
                  <label>
                    <span className="mdi mdi-map-marker"></span>Add a location
                    for it to show here
                  </label>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-center h-550 preview-right">
                  <div>
                    <h4>Select Date & Times</h4>
                    <Calendar className="border-0" onChange={onChange} value={date} />
                    {/* <p>Selected Date: {date.toDateString()}</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </row>
      </div>
    </>
  );

}

export default Schedulesetting