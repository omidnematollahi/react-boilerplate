import { useSuspenseQuery } from '@tanstack/react-query';
import { NavLink } from 'react-router-dom';
import { sessionQueries } from '~entities/session';
import { pathKeys } from '~shared/libs/react-router';

import './user-layout.scoped.scss';

export function UserLayout() {
  const { data: user } = useSuspenseQuery(
    sessionQueries.userService.queryOptions()
  );

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <NavLink className="navbar-brand" to={pathKeys.home()}>
          conduit
        </NavLink>

        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <NavLink className="nav-link" to={pathKeys.home()}>
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className="nav-link"
              to={pathKeys.profile.byUsername({ username: user!.username })}
            >
              <img
                className="user-pic"
                src={user!.image}
                alt={user!.username}
              />
              {user!.username}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
