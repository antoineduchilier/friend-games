'use client';
import 'flag-icons/css/flag-icons.min.css';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import AngleLeft from '../../public/images/angleLeft';
import AngleRight from '../../public/images/angleRight';
import { languages } from '../utils/utils';
import styles from './page.module.css';

type SettingsForm = {
  language: string;
};

const SettingsPage = () => {
  const router = useRouter();
  const [currentLanguage, setCurrentLanguage] = useState('fr');

  const loadLanguage = () => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
    }
  };
  useEffect(() => {
    loadLanguage();
  }, []);

  const { watch, setValue } = useForm<SettingsForm>({
    defaultValues: {
      language: 'fr',
    },
  });
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      setValue('language', savedLanguage);
    }
  }, [setValue]);

  const goToLanguageChoice = () => {
    router.push('/settings/languages');
  };

  const leaveSettings = () => {
    router.back();
  };

  const selected = languages.find((option) => option.value === watch('language'));

  return (
    <div className={styles['settings']}>
      <div className={styles['settings-title-bar']}>
        <div className={styles['background-angle-left-icon']} onClick={leaveSettings}>
          <AngleLeft className={styles['angle-left-icon']} />
        </div>
        <h2 className={styles['settings-title']}>Réglages</h2>
      </div>
      <div className={styles['settings-language']}>
        <h2 className={styles['settings-language-title']}>LANGUE</h2>
        <button
          type="button"
          onClick={goToLanguageChoice}
          onChange={(_value) => setValue('language', watch('language'))}
          className={styles['select-button']}
        >
          <span className={`fi ${selected?.flag}`} />
          {selected?.label}
          <AngleRight className={styles['angle-right-icon']} />
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
