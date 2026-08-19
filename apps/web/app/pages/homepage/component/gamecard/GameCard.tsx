import { Card } from 'antd';
import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import { JSX } from 'react';
import RightArrow from '../../../../../public/images/RightArrow';
import styles from './GameCard.module.css';
interface GameCardProps {
  href: Url;
  gameName: string;
  gameDescription: string;
  gamePlayer: string;
  selectIcon: JSX.Element;
  color: string;
  opacityColor: string;
}

const GameCard = ({
  href,
  gameName,
  gameDescription,
  gamePlayer,
  selectIcon,
  color,
  opacityColor,
}: GameCardProps) => {
  return (
    <div
      className={styles['homepage-card']}
      style={
        { '--define-color': color, '--define-opacity-color': opacityColor } as React.CSSProperties
      }
    >
      <Link href={href}>
        <Card style={{ borderRadius: '24px' }}>
          <div className={styles['homepage-card-content']}>
            <div className={styles['homepage-card-left']}>
              <div className={styles['homepage-background-card-icon']}>
                <div className={styles['homepage-card-icon']}>{selectIcon}</div>
              </div>
              <div>
                <h2 className={styles['homepage-game-title']}>
                  {gameName} <RightArrow className={styles['homepage-arrow']} />
                </h2>
                <p className={styles['homepage-game-subtitle']}>{gameDescription} </p>
                <div className={styles['homepage-card-players']}>
                  <div
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '12px',
                      backgroundColor: 'var(--define-color)',
                    }}
                  />
                  <p>{gamePlayer}</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </div>
  );
};
export default GameCard;
