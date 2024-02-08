import { Link } from 'react-router-dom';
const Sidebar = ({ isToggled, handleToggle }) => {


  return (
    <>
      <nav id="sidebar" className={`sidebar-wrapper ${isToggled ? '' : 'toggled'}`}>
        <div
          className="sidebar-content"
          data-simplebar=""
          style={{ height: "calc(100% - 60px)" }}
        >
          <div className="sidebar-brand">
            <img
              src="Logo.png"
              height={100}
              className="logo-light-mode"
              alt=""
            />
          </div>
          <ul className="sidebar-menu">
            <div>
              <Link className='create_meeting_btn_link' to="/createmeeting">
                <button className="create_meeting_btn">
                  <span className="mdi mdi-plus" />Create
                </button>
              </Link>
            </div>
            <li className="sidebar">
              <a href="">
                <i className="mdi mdi-link-variant" />
                Event types
              </a>
            </li>
            <li className="sidebar">
              <a href="">
                <i className="mdi mdi-calendar-range" />
                Scheduled events
              </a>
            </li>
            <li className="sidebar">
              <a href="">
                <i className="mdi mdi-clock-time-five-outline" />
                Availability
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Sidebar