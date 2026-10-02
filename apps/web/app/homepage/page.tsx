'use client';

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n/i18n';
import CrossIcon from '../../public/images/CrossIcon';
import TargetIcon from '../../public/images/targetIcon';
import TrophyIcon from '../../public/images/trophyIcon';
import GameCard from '../components/gamecard/GameCard';
import { GameCardType } from '../components/gamecard/gameCard.type';
import styles from './page.module.css';

const Homepage = () => {
  const { t, i18n } = useTranslation();
  console.log('i18n:', i18n);
  console.log('changeLanguage:', i18n.changeLanguage);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const changeLanguage = () => {
    let newLanguage = 'fr';
    if (i18n.language === 'fr') {
      newLanguage = 'en';
    }
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const languageButtonText = () => {
    if (i18n.language === 'fr') {
      return '🇬🇧 English';
    }

    return '🇫🇷 Français';
  };

  const games: GameCardType[] = [
    {
      href: '/darts',
      title: t('homepage.cards.card-0.title'),
      description: t('homepage.cards.card-0.description'),
      details: t('homepage.cards.card-0.details'),
      icon: <TargetIcon />,
      type: 'darts',
    },
    {
      href: '/',
      title: t('homepage.cards.card-1.title'),
      description: t('homepage.cards.card-1.description'),
      details: t('homepage.cards.card-1.details'),
      icon: <CrossIcon />,
      type: 'belote',
      disabled: true,
    },
  ];

  return (
    <div className={styles['homepage']}>
      <div className={styles['homepage-logo-title']}>
        <TrophyIcon className={styles['homepage-logo']} />
        <div>
          <h3 className={styles['homepage-title']}>{t('homepage.title')}</h3>
          <p className={styles['homepage-content-subtitle']}> {t('homepage.subtitle')}</p>
        </div>
      </div>
      <div className={styles['homepage-content-newgame']}>
        <h1 className={styles['homepage-newgame-title']}>
          {t('homepage.newgame.title')}{' '}
          <span className={styles['homepage-title-part']}>{t('homepage.newgame.title-2')}</span>
        </h1>
        <p className={styles['homepage-newgame-subtitle']}>{t('homepage.newgame.subtitle')}</p>
      </div>
      <div className={styles['homepage-gamecard']}>
        {games.map((game) => (
          <GameCard key={game.title} {...game} />
        ))}
      </div>
      <button type="button" onClick={changeLanguage}>
        {languageButtonText()}
      </button>
    </div>
  );
};
export default Homepage;
