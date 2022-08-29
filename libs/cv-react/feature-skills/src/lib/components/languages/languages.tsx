import './languages.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { LanguageModel } from '@cv-portfolio/data';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Space } from '@cv-portfolio/shared/react-ui';

/* eslint-disable-next-line */
export interface LanguagesProps {
  languages: LanguageModel[];
}

export const Languages: React.FC<LanguagesProps> = ({ languages }) => {
  library.add(faStar);

  return (
    <div className="langs-container">
      {languages.map((lang) => (
        <div
          key={lang.langId}
          className={`lang-item ${lang.isNative ? 'lang-native' : null}`}
        >
          <p className="lang-name">
            {lang.langName}
            <Space />
            {lang.isNative && <FontAwesomeIcon icon={faStar} />}
          </p>
          {lang.isNative && <span className="native">Native</span>}
          <p className="lang-desc">{lang.langDesc}</p>
        </div>
      ))}
    </div>
  );
};
