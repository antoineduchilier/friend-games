import { Card } from 'antd';
import Link from 'next/link';
import styles from './pages/homepage/Homepage.module.css';

const Homepage = () => {
  return (
    <div className={styles['homepage']}>
      <h3 className={styles['homepage-title']}>Bienvenue sur Friend Games !</h3>
      <div className={styles['homepage-cards']}>
        {/* <div className={styles['homepage-cards-grid']}> */}
        <Card
          cover={
            <img
              className={styles['homepage-image-card']}
              src="/images/darts.jpg"
              alt="Jeu de fléchettes"
              draggable={false}
            />
          }
          className={styles['homepage-card']}
        >
          <Link href="/pages/darts">
            <b>Go to Darts</b>{' '}
          </Link>
        </Card>
        <Card
          cover={
            <img
              className={styles['homepage-image-card']}
              src="/images/comingsoon.jpg"
              alt="Jeu de fléchettes"
              draggable={false}
            />
          }
          className={styles['homepage-card']}
        >
          <Link href="/">
            <b>Coming Soon</b>
          </Link>
        </Card>
        {/* </div>
        <div className={styles['homepage-cards-grid']}> */}
        <Card
          cover={
            <img
              src="/images/comingsoon.jpg"
              alt="Jeu de fléchettes"
              draggable={false}
              className={styles['homepage-image-card']}
            />
          }
          className={styles['homepage-card']}
        >
          <Link href="/">
            <b>Coming Soon</b>
          </Link>
        </Card>
        <Card
          cover={
            <img
              src="/images/comingsoon.jpg"
              alt="Jeu de fléchettes"
              draggable={false}
              className={styles['homepage-image-card']}
            />
          }
          className={styles['homepage-card']}
        >
          <Link href="/">
            <b>Coming Soon</b>
          </Link>
        </Card>
        {/* </div> */}
      </div>
    </div>
  );
};
export default Homepage;
