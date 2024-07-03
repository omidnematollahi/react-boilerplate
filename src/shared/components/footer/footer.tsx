import { NavLink } from 'react-router-dom';
import { pathKeys } from '~shared/libs/react-router';

export function Footer() {
  return (
    <footer>
      <div className="container">
        <NavLink className="logo-font" to={pathKeys.home()}>
          Home
        </NavLink>
      </div>
    </footer>
  );
}
