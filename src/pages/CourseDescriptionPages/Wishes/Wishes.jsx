import { WishesItem } from './WishesItem';
import styles from './style.module.css';

export const Wishes = ({ terms }) => {
  return (
    <div className={styles.wishesBlock}>
      {terms.map((el, index) => (
        <WishesItem key={index} index={index + 1} wishesText={el} />
      ))}
    </div>
  );
};
