import styles from './faqSection.module.scss';
import { ReactComponent as CyborgoFaceSvg } from './svg/cyborgo-face.svg';
import { ReactComponent as FlowerSvg } from './svg/flower.svg';
import { ReactComponent as PopGlassesSvg } from './svg/pop-glasses.svg';

export default function FaqSection() {
  return (
    <section className={styles.faqSection}>
      <hgroup className={styles.faqContainer}>
        <h2>FAQ</h2>
        <div className={styles.questionFirst}>
          <PopGlassesSvg />
          <h3>What are Robotos?</h3>
          <p>
            Robotos is a collection of algorithmically generated droid
            characters designed by Pablo Stanley and minted as NFTs on the
            Ethereum blockchain. The 1st generation of 10,000 droids will be
            constructed from various metal outfits, tin faces, digital
            accessories, top pieces, faces, backpacks, arms, and colors. Robotos
            have different body types, some rarer than others, and... there are
            rumors that you could find humans pretending to be robots too. Is it
            true? 🤔
          </p>
        </div>

        <div className={styles.question}>
          <CyborgoFaceSvg />
          <h3>Who is behind Robotos?</h3>
          <p>
            The Robotos team are{' '}
            <strong>
              Meela, Lulu, Zackboto, Niklas, Bureboto, Ireboto, Captain
              Excellent, Jaboto, Darude,
            </strong>
            the <strong>Bueno Team,</strong> and <strong>Pablo Stanley.</strong>
            <br />
            <br />
            <strong>Lulu</strong> and <strong>Meela</strong> have led the
            community, events, partnerships, and marketing efforts. Zack built
            the algorithmic image previewer and editor, as well as the unique
            web3 experiences like the banner editor, your stuff page, the
            suit-up tool, the Robotos Workshop, and the Robopets Smart Contract.
            <br />
            <br />
            Jaboto and Bueno joined, helping with the gaming and world-building
            tools. Niklas has led the Discord management, bots, security, and
            adventures. Bureboto and Captain Excellent have expanded the art and
            world of Robotos and added their unique design vision to the
            project.
            <br />
            <br />
            Other people who have helped throughout Roboto's history include
            Ashira, Damn Randy, Melissa Mimosa, Caveguy, Viri, Ireboto, Waldo,
            Boodmasku, Tony Herrera, Clorxo, and Darude. And we couldn't be
            anywhere without the help of our distinguished mods, POLG, Cool
            Kevin, LeBoto James, Saint, Doomboto, and Dimps.
            <br />
            <br />
            Pablo Stanley created Robotos, including all the art and story, and
            has led the project ever since. He's also a cofounder of Bueno and
            Humankind. He's previously contributed to the design community with
            open-source illustrations like Open Peeps, Humaaans, Avataaars,
            Buttts, Bottts, and Open Doodles. He's also the creator of The
            Design Team comics series.
            <br />
            <br />
            In 2021, Pablo Stanley, Zackboto, and @guiltyNFT co-founded Robotos.
            <br />
            <br />
            Pabs has shared free crash courses on different art and design tools
            on his YouTube channel, Sketch Together. And he's created some fun
            (and some dumb) projects like Clubpad, Pablito Planeta, Latinx Who
            Design, and Dreamer Stories.
            <br />
            <br />
            Be sure to also follow Humankind, another project made by Pablo,
            Meela, & the Bueno team.
          </p>
        </div>

        <div className={styles.question}>
          <img className={styles.image} src="/img/body.png" alt="/" />
          <h3>What do I get?</h3>
          <p>
            You get different image assets of your Roboto, including an animated
            GIF, PNG, and SVG file (which is resolution free.) Each Roboto comes
            with rights to create and distribute derivatives. Read more on the
            license agreement.
          </p>
        </div>

        <div className={styles.question}>
          <img
            style={{ width: '120px' }}
            src="/img/gradient-shades.png"
            alt="/"
          />
          <h3>How do I get my stuff?</h3>
          <p>
            Visit Your Stuff to view all the assets associated with your Roboto,
            including the SVG (vector graphics), transparent background, Roboto
            spec sheet, and more.
          </p>
        </div>

        <div className={styles.question}>
          <img className={styles.image} src="/img/lightning.png" alt="/" />
          <h3>Why Robotos?</h3>
          <p>
            By collecting Robotos you'll have a voice in the community and help
            guide the direction of the project and development of the story.
            Already some great ideas have come from the community. Working
            together we can continue the grow the Robotos ecosystem!
          </p>
        </div>

        <div className={styles.question}>
          <FlowerSvg />
          <h3>What's an NFT?</h3>
          <p>
            NFT stands for "Non-fungible token," which means that it's a unique,
            digital item with blockchain-managed ownership that users can buy,
            own, and trade. Some NFT's fundamental function is to be digital
            art. But they can also offer additional benefits like exclusive
            access to websites, event tickets, game items, and ownership records
            for physical objects. Think of it as a unique piece of art that can
            also work as a "members-only" card. Robotos works like this.
          </p>
        </div>

        <div className={styles.question}>
          <img className={styles.image} src="/img/explosivo.png" alt="/" />
          <h3>How do I NFT?</h3>
          <p>
            New to NFTs? No worries, here are some steps on what you need to do
            to get your Roboto.
            <br />
            <br />
            Download the metamask.io extension for the Chrome/Brave browser or
            app on mobile. This will allow you to make purchases with Ethereum
            and can be found in the extensions tab. If you are on mobile, you
            must use the Metamask App Browser You can purchase Ethereum through
            the Metamask Wallet using Wyre or Send Ethereum from an exchange
            like Coinbase. Click on Connect at the top of the page and connect
            your Metamask. Once joined, you will be able to purchase the NFTs in
            the mint section. You will be prompted to sign your transaction.
            FYI, there will be a fee associated with every transaction related
            to gas prices. Once you have made your purchase, your Roboto NFTs
            will be viewable in your wallet and on OpenSea.
          </p>
        </div>
      </hgroup>
    </section>
  );
}
