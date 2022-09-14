import './header.scss';
import Nav from './nav/nav';

/* eslint-disable-next-line */
export interface HeaderProps {
  children?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div className="cv-header">
      <Nav />
      {children}
    </div>
  );
};
