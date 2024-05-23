import styles from './App.module.scss';
import { ReactComponent as ArrowDownSvg } from './svg/arrow-down.svg';
import { ReactComponent as DiagramTextSvg } from './svg/diagram-text.svg';
import { ReactComponent as FigmaTextSvg } from './svg/figma-text.svg';
import { ReactComponent as FigmaSvg } from './svg/figma.svg';
import { ReactComponent as HeartSvg } from './svg/heart.svg';
import { ReactComponent as MagicCopyIconSvg } from './svg/magic-copy-icon.svg';
import { ReactComponent as MagicIconSvg } from './svg/magic-icon.svg';
import { ReactComponent as MagicImageIconSvg } from './svg/magic-image-icon.svg';
import { ReactComponent as PaperIconSvg } from './svg/paper-icon.svg';
import { ReactComponent as PenIconSvg } from './svg/pen-icon.svg';
import { ReactComponent as SparklesSvg } from './svg/sparkles.svg';
import { ReactComponent as SpellsSvg } from './svg/spells.svg';
import { ReactComponent as TextIconSvg } from './svg/text-icon.svg';

export default function App() {
  return (
    <body>
      <a href="/">
        <img src="/" alt="logo" />
        <h1>
          Magician <span>beta</span>
        </h1>
      </a>

      <header>
        <nav>
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
      </header>

      <main>
        <section>
          <hgroup>
            <h1>Every little thing it does is magic</h1>
            <p>A magical design tool for Figma powered by AI.</p>
          </hgroup>
          <a href="/">
            <FigmaSvg /> Install on Figma
          </a>

          <picture>
            <img src="/img/magic-hero.jpg" alt="/" />
          </picture>

          <a href="/">
            <HeartSvg />
            2.1k likes
          </a>
          <a href="/">
            <ArrowDownSvg />
            53.3k installs
          </a>
          <p>
            Made by
            <DiagramTextSvg />
          </p>
          <p>
            Works with
            <FigmaTextSvg />
          </p>
        </section>

        <section>
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
          <ul>
            <li>
              <a href="/">
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
            <li>+ more</li>
          </ul>
          <picture>
            <img id="copywriting" src="/img/magic-copy-min.gif" alt="/" />
            <img id="text-to-image" src="/img/magic-image-min.gif" alt="/" />
          </picture>
        </section>

        <section>
          <hgroup>
            <h1>
              <SparklesSvg />
              Cast Magic Spells
            </h1>
            <p>
              Each magic spell works alongside you to expand your creativity and
              imagination as you design.
            </p>
          </hgroup>
          <ul>
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
            <li>+ more</li>
          </ul>
          <picture>
            <img id="magic-icon" src="/img/magic-icon.jpg" alt="/" />
            <img id="magic-copy" src="/img/magic-copy.jpg" alt="/" />
            <img id="magic-image" src="/img/magic-image.jpg" alt="/" />
          </picture>
        </section>

        <section>
          <hgroup>
            <h1>Made by Diagram</h1>
            <p>Be more creative with smarter design tools.</p>
          </hgroup>
          <picture>
            <img src="/" alt="/" />
            <img src="/" alt="/" />
          </picture>
          <hgroup>
            <span>Used by designers on these teams:</span>
            <img src="/" alt="/" />
            <img src="/" alt="/" />
            <img src="/" alt="/" />
            <img src="/" alt="/" />
            <img src="/" alt="/" />
            <img src="/" alt="/" />
            <img src="/" alt="/" />
            <img src="/" alt="/" />
            <img src="/" alt="/" />
          </hgroup>
        </section>

        <section>
          <h1>Pricing</h1>
          <div>
            <span>Public beta</span>
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

        <section>
          <hgroup>
            <h1>Get Started with Magician</h1>
            <p>A magical design tool for Figma powered by AI.</p>
          </hgroup>
          <a href="/">Install on Figma</a>
          <a href="/">Join the Discord</a>
          <hgroup>
            <h3>Magician</h3>
            <ul>
              <li>Support</li>
              <li>Contact</li>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </hgroup>
        </section>
      </main>
    </body>
  );
}
