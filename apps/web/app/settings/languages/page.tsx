'use client';

import { Checkbox } from 'antd';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import AngleLeft from '../../../public/images/angleLeft';
import { keysTranslationSvg, languages } from '../../utils/utils';
import styles from './page.module.css';

const Languages = () => {
  const [search, setSearch] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const router = useRouter();

  const leaveLanguage = () => {
    router.back();
  };

  const filteredLanguages = useMemo(
    () =>
      languages.filter((language) => language.label.toLowerCase().includes(search.toLowerCase())),
    [languages, search],
  );

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');

    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedLanguage', selectedLanguage);
  }, [selectedLanguage]);

  return (
    <div className={styles['language']}>
      <div className={styles['language-title-bar']}>
        <div className={styles['background-angle-left-icon']} onClick={leaveLanguage}>
          <AngleLeft />
        </div>
        <h2>Langue</h2>
      </div>
      <div className={styles['choose-language']}>
        <h2>Sélectionnez votre langue</h2>
        <input
          type="search"
          placeholder="Rechercher une langue..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      {filteredLanguages.length === 0 && <p>Aucune langue trouvée</p>}
      <div className={styles['language-list']}>
        {filteredLanguages.map((language) => (
          <div
            key={language.value}
            onClick={() => setSelectedLanguage(language.value)}
            className={styles['language-lign']}
          >
            <div className={styles['language-info']}>
              <span className={`fi ${keysTranslationSvg[language.value]}`} />
              {language.label}
            </div>
            <Checkbox
              checked={selectedLanguage === language.value}
              className={styles['checkbox']}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;
