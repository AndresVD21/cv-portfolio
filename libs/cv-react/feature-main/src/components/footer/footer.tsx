import './footer.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faReact } from '@fortawesome/free-brands-svg-icons';

/* eslint-disable-next-line */
export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  library.add(faReact);
  return (
    <footer className="cv-portfolio-footer">
      <img src="/assets/images/logo.png" alt="logo" className="logo" />
      <FontAwesomeIcon icon={faReact} size="2x" className="icon-powered" />
      <p className="powered">Powered by Nx</p>
    </footer>
  );
};

export default Footer;
