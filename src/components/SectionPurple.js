import styles from './components/SectionPurple.js';

export default function SectionPurple() {
  return (
    <section className={styles.sectionPurple}>
      <div className={styles.container}>
        <hgroup>
          <h1>Every little thing it does is magic</h1>
          <p>A magical design tool for Figma powered by AI.</p>
        </hgroup>

        <ButtonComponent href="/" variant="fancy">
          <FigmaSvg /> Install on Figma
        </ButtonComponent>

        <picture className={styles.picture}>
          <img src="/img/magic-hero.jpg" alt="/" />
        </picture>

        <div className={styles.flex}>
          <ButtonComponent href="/" variant="ghost">
            <HeartSvg />
            2.1k likes
          </ButtonComponent>

          <ButtonComponent href="/" variant="ghost">
            <ArrowDownSvg />
            53.3k installs
          </ButtonComponent>
        </div>

        <div className={styles.flex}>
          <p className={styles.madeby}>
            Made by
            <a href="/">
              <DiagramTextSvg />
            </a>
          </p>

          <p className={styles.madeby}>
            Works with
            <a href="/">
              <FigmaTextSvg />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
