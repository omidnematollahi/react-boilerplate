import { GenericError } from '~shared/libs/fetch';
import { ErrorHandler } from '../error';
import './full-page-error.component.scss';

type FullPageErrorProps = {
  error: GenericError<any>;
};

export function FullPageError(props: FullPageErrorProps) {
  const { error } = props;

  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
        <div className="container">
          <h1 className="logo-font">Something went wrong:</h1>
          <ErrorHandler error={error} size="small" />
        </div>
      </div>
    </div>
  );
}
