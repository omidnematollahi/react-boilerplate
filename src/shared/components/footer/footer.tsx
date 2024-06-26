import { NavLink } from 'react-router-dom';
import { pathKeys } from '~shared/libs/react-router';

export function Footer() {
  return (
    <footer>
      <div className="container">
        <NavLink className="logo-font" to={pathKeys.home()}>
          conduit
        </NavLink>
        <span className="attribution">
          An interactive learning project from{' '}
          <a href="https://thinkster.io" target="_blank" rel="noreferrer">
            Thinkster
          </a>
          . Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
  );
}
