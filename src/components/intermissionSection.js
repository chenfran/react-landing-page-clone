import styles from './intermissionSection.module.scss';
import { ReactComponent as RowOneSvg } from './svg/row-1.svg';
import { ReactComponent as RowTwoSvg } from './svg/row-2.svg';

export default function IntermissionSection() {
  return (
    <section className={styles.intermission}>
      <div className={styles.centerImageBlock}>
        <RowOneSvg />
      </div>
      <div className={styles.centerImageBlock2}>
        <RowTwoSvg />
      </div>
    </section>
  );
}
