import './loading.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* eslint-disable-next-line */
export interface LoadingProps {
  loadingMessage: string;
}

export const Loading: React.FC<LoadingProps> = ({ loadingMessage }) => {
  library.add(faCircleNotch);
  return (
    <div className="loading-container">
      <FontAwesomeIcon icon={faCircleNotch} spin={true} size="3x" />
      <p className="loading-message">{loadingMessage}</p>
    </div>
  );
};
