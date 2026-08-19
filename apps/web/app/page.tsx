import CrossIcon from '../public/images/CrossIcon';
import TargetIcon from '../public/images/targetIcon';
import TrophyIcon from '../public/images/trophyIcon';
import styles from './pages/homepage/Homepage.module.css';
import GameCard from './pages/homepage/component/gamecard/GameCard';

const Homepage = () => {
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
        <GameCard
          href={'/pages/darts'}
          gameName={'Fléchettes'}
          gameDescription={'301, 501, Cricket. Visez le centre !'}
          gamePlayer={'2-8 joueurs'}
          selectIcon={<TargetIcon />}
          color={'var(--color-primary)'}
          opacityColor={'var(--color-primary10)'}
        />
        <GameCard
          href={'/'}
          gameName={'Belote'}
          gameDescription={'Annonces, capots et belote-rebelote'}
          gamePlayer={'2 ou 4 joueurs (équipes)'}
          selectIcon={<CrossIcon />}
          color={'var(--color-secondary'}
          opacityColor={'var(--color-secondary10)'}
        />
      </div>
    </div>
  );
};
export default Homepage;
