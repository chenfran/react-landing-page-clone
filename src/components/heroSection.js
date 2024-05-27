import styles from './heroSection.module.scss';
import { ReactComponent as HeroImage01Svg } from './svg/hero-image01.svg';
import { ReactComponent as HeroImage02Svg } from './svg/hero-image02.svg';
import { ReactComponent as HeroImage07Svg } from './svg/hero-image07.svg';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroLetters}>
          <h1 className={styles.heroHeading}>RO</h1>
          <h1 className={styles.heroHeading2}>BOT</h1>
          <h1 className={styles.heroHeading3}>OS</h1>
        </div>
        <HeroImage01Svg className={styles.imageCr1} />
        <HeroImage02Svg className={styles.imageCr2} />
        <img src="/img/hero-image03.png" alt="/" className={styles.imageCr3} />
        <img src="/img/hero-image04.png" alt="/" className={styles.imageCr4} />
        <img src="/img/hero-image05.png" alt="/" className={styles.imageCr5} />
        <img src="/img/hero-image06.png" alt="/" className={styles.imageCr6} />
        <HeroImage07Svg className={styles.imageCr7} />
        <img src="/img/hero-image08.png" alt="/" className={styles.imageCr8} />
        <img src="/img/hero-image09.png" alt="/" className={styles.imageCr9} />
        <img src="/img/hero-image10.png" alt="/" className={styles.imageCr10} />
        <img src="/img/hero-image11.png" alt="/" className={styles.imageCr11} />
        <a className={styles.primaryHeroButton} href="/">
          Buy on Robotos Marketplace
        </a>
      </div>
    </section>
  );
}
