'use client';

import { Checkbox } from 'antd';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import AngleLeft from '../../../public/images/angleLeft';
import { languages } from '../../utils/utils';
import styles from './page.module.css';

const Languages = () => {
  const [search, setSearch] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [initialized, setInitialized] = useState(false);

  const router = useRouter();

  const leaveLanguage = () => {
    router.back();
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');

    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
    }

    setInitialized(true);
  }, []);

  useEffect(() => {
    if (!initialized || !selectedLanguage) return;

    localStorage.setItem('selectedLanguage', selectedLanguage);
  }, [selectedLanguage, initialized]);

  const filteredLanguages = languages.filter((language) =>
    language.label.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className={styles['language']}>
      <div className={styles['language-title-bar']}>
        <div className={styles['background-angle-left-icon']} onClick={leaveLanguage}>
          <AngleLeft className={styles['angle-left-icon']} />
        </div>

        <h2 className={styles['language-title']}>Langue</h2>
      </div>

      <div className={styles['choose-language']}>
        <h2 className={styles['select-language-title']}>Sélectionnez votre langue</h2>

        <input
          type="search"
          className={styles['input-language']}
          placeholder="Rechercher une langue..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <div className={styles['language-list']}>
        {filteredLanguages.map((language) => (
          <div
            key={language.value}
            onClick={() => setSelectedLanguage(language.value)}
            className={styles['language-lign']}
          >
            <div className={styles['language-info']}>
              <span className={`fi ${language.flag}`} />
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
