import { NavLink } from 'react-router-dom';
import { pathKeys } from '~shared/libs/react-router';

import './guest-layout.scoped.scss';

export function GuestLayout() {
  return (
    <>
      <nav className="navbar navbar-light">
        <div className="container">
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <NavLink className="nav-link" to={pathKeys.home()}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={pathKeys.login()}>
                Sign in
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={pathKeys.register()}>
                Sign up
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
