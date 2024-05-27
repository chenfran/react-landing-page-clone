import styles from './mintSection.module.scss';

export default function MintSection() {
  return (
    <section className={styles.mintSection}>
      <card className={styles.mintingContainer}>
        <img
          className={styles.mintCardImage}
          src="/img/robotos-mascot.png"
          alt="/"
        />
        <h2>Get your Robotos</h2>
        <p>
          Robotos is a collection of droid characters designed by{' '}
          <strong>Pablo Stanley</strong> and minted as NFTs. They are
          constructed from various metal outfits, tin faces, digital
          accessories, top pieces, faces, backpacks, arms, and colors. Get your
          own!
        </p>
        <a className={styles.pinkButton} href="/">
          Buy on Robotos Marketplace
        </a>
      </card>
    </section>
  );
}
