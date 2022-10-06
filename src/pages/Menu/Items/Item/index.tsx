import styles from './Item.module.scss';
import { IItem } from './IItem';
import logo from 'assets/logo.svg';
import classNames from 'classnames';

interface Props {
  item: IItem
}

export default function Item({ item }: Props) {
  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={logo} alt={item.title} />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2>{item.title}</h2>
          <p>{ item.description }</p>
        </div>
        <div className={styles.item__tags}>
          <div className={classNames({
            [styles.item__type]: true,
            [styles[`item__type__${item.category.label.toLowerCase()}`]]: true
          })}>
            {item.category.label}
          </div>
          <div className={styles.item__portion}>
            {item.serving} serving{item.serving === 1 ? '' : 's'}
          </div>
          <div className={styles.item__peopleAmount}>
            {item.size}g
          </div>
          <div className={styles.item__price}>
            R${item.price}
          </div>
        </div>
      </div>
    </div>
  )
}