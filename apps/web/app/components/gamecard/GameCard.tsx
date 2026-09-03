'use client';
import style from 'clsx';
import { useRouter } from 'next/navigation';
import RightArrow from '../../../public/images/RightArrow';
import styles from './GameCard.module.css';
import { GameCardType } from './gameCard.type';

const GameCard = ({ href, title, description, details, icon, type, disabled }: GameCardType) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };
  return (
    <div className={style(styles[type], disabled && styles.disabled)}>
      <button className={styles['homepage-button']} onClick={handleClick}>
        <div className={styles['homepage-card-content']}>
          <RightArrow className={styles['homepage-arrow']} />
          <div className={styles['homepage-card-left']}>
            <div className={styles['homepage-background-card-icon']}>
              <div className={styles['homepage-card-icon']}>{icon}</div>
            </div>
            <div>
              <h2 className={styles['homepage-game-title']}>{title}</h2>
              <p className={styles['homepage-game-subtitle']}>{description} </p>
              <div className={styles['homepage-card-players']}>
                <div className={styles['homepage-card-dot-before-player']} />
                <p>{details}</p>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};
export default GameCard;
