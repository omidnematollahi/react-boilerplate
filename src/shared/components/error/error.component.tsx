import { UnexpectedErrorDto } from '~shared/api';
import { GenericError, isHttpErrorCode } from '~shared/libs/fetch';
import './error.component.scss';

type ErrorHandlerProps = {
  error: GenericError<any>;
  size?: 'small' | 'medium' | 'large' | 'full';
};

export function ErrorHandler(props: ErrorHandlerProps) {
  const { error, size = 'medium' } = props;
  const className = `wrapper loader-${size}`;

  if (isHttpErrorCode(422)(error)) {
    const data = JSON.parse(error.response as string) as UnexpectedErrorDto;
    const errors: string[] = [];

    Object.entries(data.errors).forEach(([key, explanations]) => {
      explanations.forEach((explanation) => {
        errors.push(key.concat(' ', explanation));
      });
    });

    return (
      <div className={className}>
        <ul className="error-messages">
          {errors.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className={className}>
      <ul className="error-messages">
        <li key={error.errorType}>{error.explanation}</li>
      </ul>
    </div>
  );
}
