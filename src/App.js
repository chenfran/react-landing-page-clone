import styles from './App.module.scss';
import ButtonComponent from './components/Button.js';
import { ReactComponent as ArrowDownSvg } from './svg/arrow-down.svg';
import { ReactComponent as AutomatorIconSvg } from './svg/automator-icon.svg';
import { ReactComponent as AutomatorSvg } from './svg/automator.svg';
import { ReactComponent as CashappSvg } from './svg/cashapp.svg';
import { ReactComponent as DiagramTextSvg } from './svg/diagram-text.svg';
import { ReactComponent as DiagramSvg } from './svg/diagram.svg';
import { ReactComponent as DiscordSvg } from './svg/discord.svg';
import { ReactComponent as DoordashSvg } from './svg/doordash.svg';
import { ReactComponent as FigmaTextSvg } from './svg/figma-text.svg';
import { ReactComponent as FigmaSvg } from './svg/figma.svg';
import { ReactComponent as HeartSvg } from './svg/heart.svg';
import { ReactComponent as InstacartSvg } from './svg/instacart.svg';
import { ReactComponent as LogoSvg } from './svg/logo.svg';
import { ReactComponent as MagicCopyIconSvg } from './svg/magic-copy-icon.svg';
import { ReactComponent as MagicIconSvg } from './svg/magic-icon.svg';
import { ReactComponent as MagicImageIconSvg } from './svg/magic-image-icon.svg';
import { ReactComponent as MetaSvg } from './svg/meta.svg';
import { ReactComponent as NetflixSvg } from './svg/netflix.svg';
import { ReactComponent as PaperIconSvg } from './svg/paper-icon.svg';
import { ReactComponent as PenIconSvg } from './svg/pen-icon.svg';
import { ReactComponent as PricingSvg } from './svg/pricing.svg';
import { ReactComponent as PrototyperIconSvg } from './svg/prototyper-icon.svg';
import { ReactComponent as PrototyperSvg } from './svg/prototyper.svg';
import { ReactComponent as RedditSvg } from './svg/reddit.svg';
import { ReactComponent as RobinhoodSvg } from './svg/robinhood.svg';
import { ReactComponent as SnapchatSvg } from './svg/snapchat.svg';
import { ReactComponent as SparklesSvg } from './svg/sparkles.svg';
import { ReactComponent as SpellsSvg } from './svg/spells.svg';
import { ReactComponent as StarSvg } from './svg/star.svg';
import { ReactComponent as TextIconSvg } from './svg/text-icon.svg';
import { ReactComponent as TwitterSvg } from './svg/twitter.svg';

export default function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.container}>
          <a href="/" className={styles.logo}>
            <LogoSvg />
            <h1>
              Magician <span>beta</span>
            </h1>
          </a>

          <nav className={styles.navigation}>
            <ul>
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/">Install</a>
              </li>
              <li>
                <a href="/">Account</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
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

        <section className={styles.section}>
          <div className={styles.container}>
            <hgroup>
              <h1>
                <SpellsSvg />
                Wave Your Magic Wand
              </h1>
              <p>
                Design with the power of AI to do everything from copywriting to
                generating unique icons from text.
              </p>
            </hgroup>

            <ul className={styles.tabs}>
              <li>
                <a href="#copywriting">
                  <PenIconSvg />
                  Text to Icon
                </a>
              </li>
              <li>
                <a href="#copywriting">
                  <TextIconSvg />
                  Copywriting
                </a>
              </li>
              <li>
                <a href="#text-to-image">
                  <PaperIconSvg />
                  Text to Image
                </a>
              </li>
              <li>
                <a href="/">+ more</a>
              </li>
            </ul>

            <picture className={styles.picture}>
              <img id="copywriting" src="/img/magic-copy-min.gif" alt="/" />
              <img id="text-to-image" src="/img/magic-image-min.gif" alt="/" />
            </picture>
          </div>
        </section>

        <section className={styles.sectionGray}>
          <div className={styles.container}>
            <hgroup>
              <h1>
                <SparklesSvg />
                Cast Magic Spells
              </h1>
              <p>
                Each magic spell works alongside you to expand your creativity
                and imagination as you design.
              </p>
            </hgroup>
            <ul className={styles.tabs}>
              <li>
                <a href="#magic-icon">
                  <MagicIconSvg />
                  Magic Icon
                </a>
              </li>
              <li>
                <a href="#magic-copy">
                  <MagicCopyIconSvg />
                  Magic Copy
                </a>
              </li>
              <li>
                <a href="#magic-image">
                  <MagicImageIconSvg />
                  Magic Image
                </a>
              </li>
              <li>
                <a href="/">+ more</a>
              </li>
            </ul>
            <picture className={styles.picture}>
              <div className={styles.plugin}>
                <img
                  className={styles.automator}
                  id="magic-icon"
                  src="/img/magic-icon.jpg"
                  alt="/"
                />
                <div className={styles.preview}>
                  <img src="/svg/figma-background-image.svg" alt="/" />
                </div>
              </div>
              <div className={styles.plugin}>
                <img
                  className={styles.automator}
                  id="magic-copy"
                  src="/img/magic-copy.jpg"
                  alt="/"
                />
                <div className={styles.preview}>
                  <img src="/svg/figma-background-image.svg" alt="/" />
                </div>
              </div>
              <div className={styles.plugin}>
                <img
                  className={styles.automator}
                  id="magic-image"
                  src="/img/magic-image.jpg"
                  alt="/"
                />
                <div className={styles.preview}>
                  <img src="/svg/figma-background-image.svg" alt="/" />
                </div>
              </div>
            </picture>
          </div>
        </section>

        <section className={styles.section}>
          <hgroup>
            <h1>
              <DiagramSvg />
              Made by Diagram
            </h1>
            <p>Be more creative with smarter design tools.</p>
          </hgroup>
          <div>
            <h3>
              <AutomatorIconSvg />
              Automator
            </h3>
            <p>There's an automation for that</p>
            <a href="/">Learn more</a>
            <AutomatorSvg />
          </div>
          <div>
            <h3>
              <PrototyperIconSvg />
              Prototyper
            </h3>
            <p>Powerful prototyping with code</p>
            <a href="/">Learn more</a>
            <PrototyperSvg />
          </div>
          <hgroup>
            <span>Used by designers on these teams:</span>
            <TwitterSvg />
            <NetflixSvg />
            <SnapchatSvg />
            <RobinhoodSvg />
            <MetaSvg />
            <DoordashSvg />
            <CashappSvg />
            <InstacartSvg />
            <RedditSvg />
          </hgroup>
        </section>

        <section className={styles.section}>
          <h1>
            <PricingSvg />
            Pricing
          </h1>
          <div>
            <span>
              <StarSvg /> Public beta
            </span>
            <hgroup>
              <h3>Free</h3>
              <p>1 license, unlimited use.</p>
            </hgroup>
            <ul>
              <li>Early access</li>
              <li>All magic spells</li>
              <li>All future updates</li>
            </ul>
            <a href="/">Try for free</a>
          </div>
        </section>

        <section className={styles.sectionTweets}>
          <hgroup>
            <h1>Get Started with Magician</h1>
            <p>A magical design tool for Figma powered by AI.</p>
          </hgroup>
          <a href="/">
            <FigmaSvg />
            Install on Figma
          </a>
          <a href="/">
            <DiscordSvg />
            Join the Discord
          </a>
          <hgroup className={styles.navigation}>
            <a href="/">
              <h3>
                <LogoSvg />
                Magician
              </h3>
            </a>
            <ul>
              <li>
                <a href="/">Support</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/">Privacy</a>
              </li>
              <li>
                <a href="/">Terms</a>
              </li>
            </ul>
          </hgroup>
        </section>
      </main>
    </div>
  );
}
