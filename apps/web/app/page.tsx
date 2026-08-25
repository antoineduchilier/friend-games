import CrossIcon from '../public/images/CrossIcon';
import TargetIcon from '../public/images/targetIcon';
import TrophyIcon from '../public/images/trophyIcon';
import styles from './pages/homepage/Homepage.module.css';
import GameCard from './pages/homepage/component/gamecard/GameCard';

const Homepage = () => {
  const games = [
    {
      href: '/pages/darts',
      gameName: 'Fléchettes',
      gameDescription: '301, 501, Cricket. Visez le centre !',
      gamePlayer: '2-8 joueurs',
      selectIcon: <TargetIcon />,
      color: 'var(--color-primary)',
      opacityColor: 'var(--color-primary10)',
      backgroundColor: '#FFFFFF',
      titleColor: '#111827',
      subtitleColor: '#4B5563',
    },
    {
      href: '/',
      gameName: 'Belote',
      gameDescription: 'Annonces, capots et belote-rebelote',
      gamePlayer: '2 ou 4 joueurs (équipes)',
      selectIcon: <CrossIcon />,
      color: '#9CA3AF',
      opacityColor: '#E5E7EB',
      backgroundColor: '',
      titleColor: '#6B7280',
      subtitleColor: '#9CA3AF',
    },
  ];

  return (
    <div className={styles['homepage']}>
      <div className={styles['homepage-logo-title']}>
        <div className={styles['homepage-logo']}>
          <TrophyIcon />
        </div>
        <div>
          <h3 className={styles['homepage-title']}>GameScore</h3>
          <p className={styles['homepage-content-subtitle']}>Compteur de points modernes</p>
        </div>
      </div>

      <div>
        <div className={styles['homepage-content-newgame']}>
          <h1 className={styles['homepage-newgame-title']}>
            Lancez une nouvelle <span className={styles['homepage-title-part']}>partie</span>
          </h1>
          <p className={styles['homepage-newgame-subtitle']}>
            Sélectionnez votre jeu pour commencer la partie
          </p>
        </div>
      </div>
      <div className={styles['homepage-gamecard']}>
        {games.map((game) => (
          <GameCard key={game.gameName} {...game} />
        ))}
      </div>
    </div>
  );
};
export default Homepage;
