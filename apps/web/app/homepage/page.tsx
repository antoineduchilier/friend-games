'use client';
import { useRouter } from 'next/navigation';
import CrossIcon from '../../public/images/CrossIcon';
import SettingsIcon from '../../public/images/settingsIcon';
import TargetIcon from '../../public/images/targetIcon';
import TrophyIcon from '../../public/images/trophyIcon';
import GameCard from '../components/gamecard/GameCard';
import { GameCardType } from '../components/gamecard/gameCard.type';
import styles from './page.module.css';

const Homepage = () => {
  const games: GameCardType[] = [
    {
      href: '/darts',
      title: 'Fléchettes',
      description: '301, 501, Cricket. Visez le centre !',
      details: '2-8 joueurs',
      icon: <TargetIcon />,
      type: 'darts',
    },
    {
      href: '/',
      title: 'Belote',
      description: 'Annonces, capots et belote-rebelote',
      details: '2 ou 4 joueurs (équipes)',
      icon: <CrossIcon />,
      type: 'belote',
      disabled: true,
    },
  ];

  const router = useRouter();

  const openSettings = () => {
    router.push('/settings');
  };

  return (
    <div className={styles['homepage']}>
      <div className={styles['homepage-logo-title']}>
        <TrophyIcon />
        <div className={styles['homepage-title']}>
          <h3>GameScore</h3>
          <p>Compteur de points modernes</p>
        </div>
        <div className={styles['homepage-background-settings-logo']} onClick={openSettings}>
          <SettingsIcon />
        </div>
      </div>
      <div className={styles['homepage-newgame']}>
        <h1>
          Lancez une nouvelle <span>partie</span>
        </h1>
        <p>Sélectionnez votre jeu pour commencer la partie</p>
      </div>
      <div className={styles['homepage-gamecard']}>
        {games.map((game) => (
          <GameCard key={game.title} {...game} />
        ))}
      </div>
    </div>
  );
};
export default Homepage;
