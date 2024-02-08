import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Your Schedulesettingsidebar component
const Schedulesettingsidebar = () => {
  const [textboxCounts, setTextboxCounts] = useState({
    SUN: { count: 1, isChecked: false },
    MON: { count: 1, isChecked: false },
    TUE: { count: 1, isChecked: false },
    WED: { count: 1, isChecked: false },
    THU: { count: 1, isChecked: false },
    FRI: { count: 1, isChecked: false },
    SAT: { count: 1, isChecked: false },
  });

  const timeOptions = [];
  for (let hour = 0; hour <= 23; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      const formattedHour = hour.toString().padStart(2, "0");
      const formattedMinute = minute.toString().padStart(2, "0");
      const time = `${formattedHour}:${formattedMinute}`;
      timeOptions.push(time);
    }
  }
  timeOptions.push("24:00");

  const handleCheckboxChange = (day) => {
    setTextboxCounts((prevCounts) => ({
      ...prevCounts,
      [day]: {
        ...prevCounts[day],
        isChecked: !prevCounts[day].isChecked,
      },
    }));
  };

  const handleAddTextbox = (day) => {
    setTextboxCounts((prevCounts) => ({
      ...prevCounts,
      [day]: {
        ...prevCounts[day],
        count: prevCounts[day].count + 1,
      },
    }));
  };

  const handleRemoveTextbox = (day) => {
    if (textboxCounts[day].count > 1) {
      setTextboxCounts((prevCounts) => ({
        ...prevCounts,
        [day]: {
          ...prevCounts[day],
          count: prevCounts[day].count - 1,
        },
      }));
    }
  };

  const navigate = useNavigate();

  const goToMeetingSettings = () => {
    navigate("/meetingsetting");
  };

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
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
              <button className="meeting-cancel" onClick={goToMeetingSettings}>
                <span className="mdi mdi-arrow-left-thick"></span>Event Type
                Summary
              </button>
              <h4 className="mt-3">Scheduling settings</h4>
            </div>
            <hr />
            <div className="d-flex flex-column meeting-detail p-3">
              <h6>Date range</h6>
              <input
                type="textbox"
                className="form-control mb-3 w-50"
                placeholder="Enter Range Date "
              />
              <hr />
              <h6>Available hours</h6>
              <p className="mx-4 schedulesetting-content">
                Set the times that people will be able to schedule these types
                of meetings with you.
              </p>
              <h6>Weekly hours</h6>

              <div className="d-flex flex-column ">
                {daysOfWeek.map((day) => (
                  <div
                    key={day}
                    className="weeklyhours-container d-flex align-items-baseline"
                  >
                    <div className="checkbox-input mb-2 me-2">
                      <input
                        type="checkbox"
                        checked={textboxCounts[day].isChecked}
                        onChange={() => handleCheckboxChange(day)}
                      />
                    </div>
                    <div>
                      <label className="weekly-hour">{day}</label>
                    </div>
                    {textboxCounts[day].isChecked ? (
                      <>
                        <div className="textbox-input">
                          {[...Array(textboxCounts[day].count)].map(
                            (_, index) => (
                              <React.Fragment key={index}>
                                <div className="d-flex">
                                  <select className="form-control mb-3 weekly-hour-textbox d-inline-block w-50">
                                    {timeOptions.map((option, i) => (
                                      <option key={i} value={option}>
                                        {option}
                                      </option>
                                    ))}
                                  </select>
                                  <label className="mt-2">-</label>
                                  <select className="form-control mb-3 weekly-hour-textbox d-inline-block w-50">
                                    {timeOptions.map((option, i) => (
                                      <option key={i} value={option}>
                                        {option}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              </React.Fragment>
                            )
                          )}
                        </div>
                        <div>
                          <span
                            className="mdi mdi-plus mb-3"
                            onClick={() => handleAddTextbox(day)}
                          ></span>
                          <span
                            className="mdi mdi-close mb-3"
                            onClick={() => handleRemoveTextbox(day)}
                          ></span>
                        </div>
                      </>
                    ) : (
                      <div>
                        <label className="unavailable-label">Unavailable</label>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Schedulesettingsidebar;
