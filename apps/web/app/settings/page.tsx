'use client';
import 'flag-icons/css/flag-icons.min.css';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';
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

  const { watch, setValue } = useForm<SettingsForm>({
    defaultValues: {
      language: 'fr',
    },
  });

  const currentLanguage = watch('language');

  const selected = useMemo(
    () => languages.find((option) => option.value === currentLanguage),
    [languages.length, currentLanguage],
  );

  const goToLanguageChoice = () => {
    router.push('/settings/languages');
  };

  const leaveSettings = () => {
    router.back();
  };

  const loadLanguage = () => {
    localStorage.getItem('selectedLanguage');
  };

  useEffect(() => {
    loadLanguage();
  }, []);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      setValue('language', savedLanguage);
    }
  }, [setValue]);

  return (
    <div className={styles['settings']}>
      <div className={styles['settings-title-bar']}>
        <div className={styles['background-angle-left-icon']} onClick={leaveSettings}>
          <AngleLeft className={styles['angle-left-icon']} />
        </div>
        <h2>Réglages</h2>
      </div>
      <div className={styles['settings-language']}>
        <h2>LANGUE</h2>
        <button
          type="button"
          onClick={goToLanguageChoice}
          onChange={(_value) => setValue('language', currentLanguage)}
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
