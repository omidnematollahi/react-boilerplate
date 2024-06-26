import { Spinner } from '../spinner';
import './loader.component.scss';

type LoaderProps = {
  size?: 'small' | 'medium' | 'large' | 'full';
};

export function Loader(props: LoaderProps) {
  const { size = 'medium' } = props;
  const className = `wrapper loader-${size}`;

  return (
    <div className={className}>
      <Spinner />
    </div>
  );
}
