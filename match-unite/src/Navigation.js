import React from 'react';
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserFriends, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const tabs = [{
    route: "/friends",
    icon: faUserFriends,
    label: "Friends"
  },{
    route: "/search",
    icon: faSearch,
    label: "Search"
  },{
    route: "/profile",
    icon: faUserCircle,
    label: "Profile"
  }]

  const Navigation = (props) => {
    return (
        <div>
         
          {/* Bottom Tab Navigator*/}
          <nav className="navbar fixed-bottom navbar-light bottom-tab-nav" role="navigation">
        <Nav className="w-100">
          <div className=" d-flex flex-row justify-content-around w-100">
            {
              tabs.map((tab, index) =>(
                <NavItem key={`tab-${index}`}>
                  <NavLink to={tab.route} className="nav-link bottom-nav-link" activeClassName="active">
                    <div id = "selection" className="row d-flex flex-column justify-content-center align-items-center">
                      <FontAwesomeIcon className="icon" size="4x" icon={tab.icon}/>
                      <div className="icon" id="label">{tab.label}</div>
                    </div>
                  </NavLink>
                </NavItem>
              ))
            }
          </div>
        </Nav>
      </nav>
          
    </div>
          
      )
    };

    export default Navigation;