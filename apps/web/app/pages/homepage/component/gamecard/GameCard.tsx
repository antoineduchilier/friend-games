import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import { JSX } from 'react';
import RightArrow from '../../../../../public/images/RightArrow';
import styles from './GameCard.module.css';
type GameCardProps = {
  href: Url;
  gameName: string;
  gameDescription: string;
  gamePlayer: string;
  selectIcon: JSX.Element;
  color: string;
  opacityColor: string;
  backgroundColor: string;
  titleColor: string;
  subtitleColor: string;
};

const GameCard = ({
  href,
  gameName,
  gameDescription,
  gamePlayer,
  selectIcon,
  color,
  opacityColor,
  backgroundColor,
  titleColor,
  subtitleColor,
}: GameCardProps) => {
  return (
    <div
      style={
        {
          '--define-color': color,
          '--define-opacity-color': opacityColor,
          '--define-background-color': backgroundColor,
          '--define-title-color': titleColor,
          '--define-subtitle-color': subtitleColor,
        } as React.CSSProperties
      }
    >
      <Link href={href}>
        <div className={styles['homepage-card-content']}>
          <RightArrow className={styles['homepage-arrow']} />
          <div className={styles['homepage-card-left']}>
            <div className={styles['homepage-background-card-icon']}>
              <div className={styles['homepage-card-icon']}>{selectIcon}</div>
            </div>
            <div>
              <h2 className={styles['homepage-game-title']}>{gameName}</h2>
              <p className={styles['homepage-game-subtitle']}>{gameDescription} </p>
              <div className={styles['homepage-card-players']}>
                <div className={styles['homepage-card-dot-before-player']} />
                <p>{gamePlayer}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default GameCard;
