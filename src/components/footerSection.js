import styles from './footerSection.module.scss';

export default function FooterSection() {
  return (
    <section className={styles.footerSection}>
      <hgroup>
        <div className={styles.domoText}>
          DOMO <br />
        </div>
        <div className={styles.domoTextPurple}>
          ARIGATO <br />
        </div>
        <a className={styles.primaryButtonFooter} href="/">
          Buy on Robotos Marketplace
        </a>
        <div className={styles.followTest}>
          <p>Follow Robotos on Twitter, Discord and Medium</p>
          <p>Verified Smart Contract</p>
        </div>
      </hgroup>
    </section>
  );
}
