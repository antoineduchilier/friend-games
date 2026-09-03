import CrossIcon from '../../public/images/CrossIcon';
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

  return (
    <div className={styles['homepage']}>
      <div className={styles['homepage-logo-title']}>
        <TrophyIcon className={styles['homepage-logo']} />
        <div>
          <h3 className={styles['homepage-title']}>GameScore</h3>
          <p className={styles['homepage-content-subtitle']}>Compteur de points modernes</p>
        </div>
      </div>
      <div className={styles['homepage-content-newgame']}>
        <h1 className={styles['homepage-newgame-title']}>
          Lancez une nouvelle <span className={styles['homepage-title-part']}>partie</span>
        </h1>
        <p className={styles['homepage-newgame-subtitle']}>
          Sélectionnez votre jeu pour commencer la partie
        </p>
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
