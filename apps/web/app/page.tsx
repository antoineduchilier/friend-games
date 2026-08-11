import { Card } from 'antd';
import Link from 'next/link';
import CrossIcon from '../public/images/CrossIcon';
import RightArrow from '../public/images/RightArrow';
import TargetIcon from '../public/images/targetIcon';
import TrophyIcon from '../public/images/trophyIcon';
import styles from './pages/homepage/Homepage.module.css';

const Homepage = () => {
  return (
    <div className={styles['homepage']}>
      <div className={styles['homepage-logo-title']}>
        <div className={styles['homepage-logo']}>
          <TrophyIcon />
        </div>
        <div>
          <div className={styles['homepage-title']}>
            <h3>GameScore</h3>
          </div>
          <div className={styles['homepage-content-subtitle']}>
            <p>Compteur de points modernes</p>
          </div>
        </div>
      </div>
      <div>
        <div className={styles['homepage-content-newgame']}>
          <h1>
            Lancez une nouvelle <span className={styles['homepage-title-part']}>partie</span>
          </h1>
          <p>Sélectionnez votre jeu pour commencer la partie</p>
        </div>
        <div className={styles['homepage-darts-card']}>
          <Link href={'/pages/darts'}>
            <Card>
              <div className={styles['homepage-card-content']}>
                <div className={styles['homepage-card-left']}>
                  <div className={styles['homepage-card-icon-darts']}>
                    <TargetIcon />
                  </div>
                  <div className={styles['homepage-game-info']}>
                    <h2>fléchettes</h2>
                    <p>301, 501, Cricket. Visez le centre !</p>
                    <div className={styles['homepage-players-darts']}>
                      <p>2-8 joueurs</p>
                    </div>
                  </div>
                </div>
                <div className={styles['homepage-arrow-darts']}>
                  <RightArrow />
                </div>
              </div>
            </Card>
          </Link>
        </div>
        <div className={styles['homepage-belote-card']}>
          <Card>
            <div className={styles['homepage-card-content']}>
              <div className={styles['homepage-card-left']}>
                <div className={styles['homepage-card-icon-belote']}>
                  <CrossIcon />
                </div>
                <div className={styles['homepage-game-info']}>
                  <h2>Belote (unavailable)</h2>
                  <p>Annonces, capots et belote-rebelote</p>
                  <div className={styles['homepage-players-belote']}>
                    <p>2 ou 4 joueurs (équipes)</p>
                  </div>
                </div>
              </div>
              <div className={styles['homepage-arrow-belote']}>
                <RightArrow />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
